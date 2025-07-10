import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./codeBlock";

const meta: Meta<typeof CodeBlock> = {
  title: "UI/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  argTypes: {
    code: { control: "text" },
    language: { control: "text" },
    showLineNumbers: { control: "boolean" },
    canCopy: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleJson = JSON.stringify(
  {
    agentId: "agent-12345",
    task: "Analyze quarterly sales data",
    status: "running",
    parameters: {
      source: "salesforce_api",
      quarter: "Q2 2024",
    },
  },
  null,
  2
);

const samplePython = `
import pandas as pd

def analyze_data(source_file):
    """Analyzes sales data from a given CSV file."""
    df = pd.read_csv(source_file)
    print("Data analysis complete.")
    return df.describe()
`;

export const JsonExample: Story = {
  args: {
    code: sampleJson,
    language: "json",
  },
};

export const Python: Story = {
  args: {
    code: samplePython,
    language: "python",
  },
};

export const NoLineNumbers: Story = {
  args: {
    ...Python.args,
    showLineNumbers: false,
  },
};