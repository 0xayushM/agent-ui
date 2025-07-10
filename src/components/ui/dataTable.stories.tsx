import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./dataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./badge";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof DataTable> = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen", // Use fullscreen for better table viewing
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Define your data type
type AgentRun = {
  id: string;
  agentName: string;
  status: "Completed" | "Running" | "Failed" | "Pending";
  startedAt: string;
  tokensUsed: number;
};

// 2. Create some sample data
const sampleData: AgentRun[] = [
  { id: "run-1", agentName: "Data Analyzer", status: "Completed", startedAt: "2024-05-21 10:00", tokensUsed: 1204 },
  { id: "run-2", agentName: "Content Writer", status: "Running", startedAt: "2024-05-21 10:05", tokensUsed: 532 },
  { id: "run-3", agentName: "API Connector", status: "Failed", startedAt: "2024-05-21 09:55", tokensUsed: 89 },
  { id: "run-4", agentName: "Code Generator", status: "Completed", startedAt: "2024-05-20 18:30", tokensUsed: 8790 },
  { id: "run-5", agentName: "Content Writer", status: "Pending", startedAt: "2024-05-21 10:06", tokensUsed: 0 },
];

// 3. Define the columns for the table
export const columns: ColumnDef<AgentRun, unknown>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "agentName",
    header: "Agent Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as AgentRun["status"];
      const variant =
        status === "Completed" ? "default" :
        status === "Running" ? "secondary" :
        status === "Failed" ? "destructive" :
        "outline";
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "startedAt",
    header: "Started At",
  },
  {
    accessorKey: "tokensUsed",
    header: () => <div className="text-right">Tokens Used</div>,
    cell: ({ row }) => <div className="text-right font-medium">{row.getValue("tokensUsed")}</div>,
  },
];

export const Default: Story = {
  args: {
    columns: columns as ColumnDef<unknown, any>[],
    data: sampleData,
  },
};

export const IsLoading: Story = {
  args: {
    columns: columns as ColumnDef<unknown, any>[],
    data: [], // Pass empty data for loading state
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: columns as ColumnDef<unknown, any>[],
    data: [],
  },
};