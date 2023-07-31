import { Decorator } from "@storybook/vue3";
import StoryWrapper from "./StoryWrapper.vue";

export const DEFAULT_THEME = "green-light";

export const withVuetifyTheme: Decorator = (story, context) => {
  return {
    components: { story, StoryWrapper },
    setup() {
      const theme = context.globals.theme || DEFAULT_THEME;
      return { theme };
    },

    template: `
      <StoryWrapper :theme="theme">
          <story></story>
      </StoryWrapper>`,
  };
};
