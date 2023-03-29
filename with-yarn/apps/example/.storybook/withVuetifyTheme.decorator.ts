import { Decorator } from "@storybook/vue3";
import { h } from "vue";
import StoryWrapper from "./StoryWrapper.vue";

export const DEFAULT_THEME = "green-light";

export const withVuetifyTheme: Decorator = (storyFn, context) => {
  const theme = context.globals.theme || DEFAULT_THEME;
  const story = storyFn();
  return h(
    StoryWrapper,
    { theme }, // Props for StoryWrapper
    {
      // Puts your story into StoryWrapper's "story" slot with your story args
      story: () => h(story, { ...context.args }),
    }
  );
};
