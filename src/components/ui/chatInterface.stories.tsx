import type { Meta, StoryObj } from "@storybook/react";
import { ChatInterface } from "./chatInterface";

const meta: Meta<typeof ChatInterface> = {
  title: "UI/ChatInterface",
  component: ChatInterface,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMessages = [
  { id: "1", role: "user" as const, content: "Hello, can you analyze the latest sales report for me?" },
  { id: "2", role: "assistant" as const, content: "Of course. Please upload the sales report or provide a link." },
  { id: "3", role: "user" as const, content: "Here is the link: [link]" },
];

export const Default: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
  },
};

export const LoadingReply: Story = {
  args: {
    messages: sampleMessages,
    isLoading: true, // Shows the "thinking" spinner
  },
};

export const Empty: Story = {
  args: {
    messages: [],
    isLoading: false,
    inputPlaceholder: "Start a conversation with the planning agent...",
  },
};