import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

// Simple button component for testing
const SimpleButton = ({ 
  children, 
  variant = "default" 
}: { 
  children: React.ReactNode;
  variant?: "default" | "outline";
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium";
  const variantStyle = variant === "outline" 
    ? "border border-gray-300 bg-transparent" 
    : "bg-black text-white";
  
  return (
    <button className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};

const meta: Meta<typeof SimpleButton> = {
  component: SimpleButton,
  title: "Test/SimpleButton"
};

export default meta;

type Story = StoryObj<typeof SimpleButton>;

export const Default: Story = {
  args: {
    children: "Simple Button"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Simple Outline Button"
  }
};
