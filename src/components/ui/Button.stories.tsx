// src/components/ui/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Mail } from "lucide-react"; // A popular icon library used by shadcn
import { Button } from "@/components/ui/button";

/**
 * A comprehensive set of stories for the Button component.
 * This component is built using class-variance-authority (CVA) for different variants and sizes.
 */
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"], // This enables the automatic documentation page
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style of the button.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: false, // The control is not useful for this prop
      description: "Render as a child component, merging props and styles.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "The content to be displayed inside the button.",
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, preventing user interaction.'
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Base story that all other stories can inherit from
const Template: Story = {
  args: {
    children: "Button",
  },
};

// --- Stories for each variant ---

export const Default: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "default",
  },
};

export const Destructive: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "destructive",
  },
};

export const Outline: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "outline",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "secondary",
  },
};

export const Ghost: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "ghost",
  },
};

export const Link: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "link",
  },
};

// --- Stories for different states and compositions ---

export const Disabled: Story = {
  ...Template,
  args: {
    ...Template.args,
    children: "I am disabled",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 size-4" /> Login with Email
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <Mail className="size-4" />,
  },
};

export const LargeSize: Story = {
  ...Template,
  args: {
    ...Template.args,
    size: "lg",
    children: "Large Button",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="https://storybook.js.org/" target="_blank">I am an Anchor Tag</a>
  },
  parameters: {
    docs: {
      description: {
        story: 'When `asChild` is true, the Button component renders its child and passes down its props. This is useful for wrapping other components like `<a>` tags or framework-specific `<Link>` components while maintaining button styles and functionality.'
      }
    }
  }
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Processing",
  },
  parameters: {
    docs: {
      description: {
        story: 'When `isLoading` is true, the button is disabled and shows a spinner. The original children are still rendered.'
      }
    }
  }
};