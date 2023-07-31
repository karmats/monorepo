import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions"), getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-mdx-gfm")],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}