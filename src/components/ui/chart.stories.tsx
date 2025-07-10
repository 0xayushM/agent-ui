import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./chart";

const meta: Meta<typeof Chart> = {
  title: "UI/Chart",
  component: Chart,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    type: { control: "radio", options: ["line", "bar"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const tokenData = [
  { date: "Jan", "Agent A": 4000, "Agent B": 2400 },
  { date: "Feb", "Agent A": 3000, "Agent B": 1398 },
  { date: "Mar", "Agent A": 2000, "Agent B": 9800 },
  { date: "Apr", "Agent A": 2780, "Agent B": 3908 },
  { date: "May", "Agent A": 1890, "Agent B": 4800 },
  { date: "Jun", "Agent A": 2390, "Agent B": 3800 },
];

export const LineChart: Story = {
  args: {
    title: "Token Usage Over Time",
    data: tokenData,
    index: "date",
    categories: [
      { name: "Agent A", color: "hsl(var(--primary))" },
      { name: "Agent B", color: "hsl(var(--destructive))" },
    ],
    type: "line",
  },
};

export const BarChart: Story = {
  args: {
    ...LineChart.args,
    title: "Monthly Token Usage",
    type: "bar",
  },
};