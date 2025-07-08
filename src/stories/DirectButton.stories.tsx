import { DirectButton } from "./DirectButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DirectButton> = {
  component: DirectButton,
  title: "Test/DirectButton"
};

export default meta;

type Story = StoryObj<typeof DirectButton>;

export const Default: Story = {
  args: {
    children: "Direct Button"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Direct Outline Button"
  }
};
