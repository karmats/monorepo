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
          { value: "light", title: "Light", left: "🌞" },
          { value: "dark", title: "Dark", left: "🌛" },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
