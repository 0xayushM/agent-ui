import { Button } from "../components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button"
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button"
  }
};
