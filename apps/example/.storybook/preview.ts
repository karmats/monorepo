import { type Preview, setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import { withVuetifyTheme } from "./withVuetifyTheme.decorator";

setup((app) => {
  registerPlugins(app);
});

const preview: Preview = {
  decorators: [withVuetifyTheme],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      toolbar: {
        icon: "paintbrush",
        // Array of plain string values or MenuItem shape
        items: [
          { value: "green-light", title: "Light (green)", left: "🌞" },
          { value: "green-dark", title: "Dark (green)", left: "🌛" },
          { value: "smoke-light", title: "Light (smoke blue)", left: "🌞" },
          { value: "smoke-dark", title: "Dark (smoke blue)", left: "🌛" },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
