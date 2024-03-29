import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  tags: ['autodocs'],
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  argTypes: {
    size: {
      control: "select",
      options: ["x-small", "small", "default", "large", "x-large"],
    },
  },
  args: { primary: false }, // default value
};

export default meta;
type Story = StoryObj<typeof Button>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
  },
};
