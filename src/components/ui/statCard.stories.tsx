import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./statCard";
import { Cpu, DollarSign, Users } from "lucide-react";

const meta: Meta<typeof StatCard> = {
  title: "UI/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    value: { control: "text" },
    change: { control: "text" },
    changeType: { control: "radio", options: ["positive", "negative"] },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Active Agents",
    value: "12",
    icon: <Cpu className="size-4 text-muted-foreground" />,
  },
};

export const WithPositiveChange: Story = {
  args: {
    title: "Revenue",
    value: "$4,203.50",
    icon: <DollarSign className="size-4 text-muted-foreground" />,
    change: "+20.1% from last month",
    changeType: "positive",
  },
};

export const WithNegativeChange: Story = {
  args: {
    title: "Active Users",
    value: "312",
    icon: <Users className="size-4 text-muted-foreground" />,
    change: "-2.5% from last hour",
    changeType: "negative",
  },
};