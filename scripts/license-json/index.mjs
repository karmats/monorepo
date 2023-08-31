#!/usr/bin/env node

/**
 * Script that generates a JSON-file with information about thirdparty dependencies in the project.
 */
import { access, constants, readFile, writeFile } from "fs/promises";
import path from "node:path";

// File paths
const CURRENT_DIRECTORY = process.cwd();

function repositoryLinkToHref(link) {
  const regex = /(github.com.*)\.git$/;
  const regexResult = regex.exec(link);
  if (regexResult && regexResult[1]) {
    return `https://${regexResult[1]}`;
  }
  return link;
}

const outputFile = process.argv
  .filter((arg) => arg.includes("output="))
  .at(0)
  ?.split("=")[1];
const exclude = process.argv
  .filter((arg) => arg.includes("exclude="))
  .map((e) => e.split("=")[1]);

/**
 * Extract link to repository from registry data for a package
 * @param {object} json - object fetched from registry with information about 1 package
 * @returns {string} with link to repository
 */
function extractLink(json) {
  if (json.repository && json.repository.url) {
    return repositoryLinkToHref(json.repository.url);
  }
  return "";
}

const packageJson = await readFile(
  path.join(CURRENT_DIRECTORY, `package.json`),
  "utf-8"
);
const packageJsonInfo = JSON.parse(packageJson);
const dependencies = packageJsonInfo.dependencies;
const exists = (path) =>
  access(path, constants.F_OK)
    .then(() => true)
    .catch(() => false);
const licenseInfoPromise = Object.keys(dependencies)
  .filter((d) => !exclude.includes(d))
  .map(async (dependency) => {
    let dependencyPath = path.join(
      CURRENT_DIRECTORY,
      "node_modules",
      dependency
    );
    while ((await exists(dependencyPath)) === false) {
      console.log("checking", dependencyPath);
      dependencyPath = path.join(
        CURRENT_DIRECTORY,
        "..",
        "..",
        "node_modules",
        dependency
      );
    }
    const depenencyPackageJson = await readFile(
      path.join(dependencyPath, "package.json"),
      "utf-8"
    );
    const depenencyPackageJsonInfo = JSON.parse(depenencyPackageJson);

    try {
      const file = await readFile(`${dependencyPath}/LICENSE`).catch(() =>
        readFile(`${dependencyPath}/LICENSE.md`)
      );
      const link = extractLink(depenencyPackageJsonInfo);
      return {
        name: depenencyPackageJsonInfo.name,
        href: link,
        version: depenencyPackageJsonInfo.version,
        license: depenencyPackageJsonInfo.license,
        licenseText: file.toString("utf-8"),
      };
    } catch {
      // throw new Error(`Could not read license file for dependency ${dependency.name}`);
      return {
        name: depenencyPackageJsonInfo.name,
        href: depenencyPackageJsonInfo.link,
        version: depenencyPackageJsonInfo.version,
        license: depenencyPackageJsonInfo.license,
        licenseText: depenencyPackageJsonInfo.licenseType,
      };
    }
  });
const licenseInfo = await Promise.all(licenseInfoPromise);
if (outputFile) {
  const outputPath = path.join(CURRENT_DIRECTORY, outputFile);
  await writeFile(outputPath, JSON.stringify(licenseInfo, undefined, 2));
} else {
  console.log(licenseInfo);
}
