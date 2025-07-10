import type { Meta, StoryObj } from "@storybook/react";
import { DashboardShell } from "./dashboardShell";
import { Home, Bot, BarChart2, History, Settings } from "lucide-react";
import { StatCard } from "../ui/statCard";
import { DataTable } from "../ui/dataTable";
import { columns } from "../ui/dataTable.stories";

const meta: Meta<typeof DashboardShell> = {
  title: "Layouts/DashboardShell",
  component: DashboardShell,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleNavItems = [
  { label: "Dashboard", href: "#", icon: <Home className="size-4" /> },
  { label: "Agents", href: "#", icon: <Bot className="size-4" />, badge: 12 },
  { label: "Analytics", href: "#", icon: <BarChart2 className="size-4" /> },
  { label: "Run History", href: "#", icon: <History className="size-4" /> },
  { label: "Settings", href: "#", icon: <Settings className="size-4" /> },
];

const sampleUser = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
};

const sampleAgentRuns = [
  { id: "run-1", agentName: "Data Analyzer", status: "Completed" as const, startedAt: "2024-05-21 10:00", tokensUsed: 1204 },
  { id: "run-2", agentName: "Content Writer", status: "Running" as const, startedAt: "2024-05-21 10:05", tokensUsed: 532 },
  { id: "run-3", agentName: "API Connector", status: "Failed" as const, startedAt: "2024-05-21 09:55", tokensUsed: 89 },
];

export const Default: Story = {
  args: {
    sidebarNavItems: sampleNavItems,
    user: sampleUser,
    children: (
      <div className="flex flex-col gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Active Agents" value="12" icon={<Bot />} />
          <StatCard title="Total Runs (24h)" value="2,350" icon={<History />} />
          <StatCard title="Success Rate" value="98.5%" icon={<BarChart2 />} />
          <StatCard title="API Costs (24h)" value="$32.50" icon={<History />} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Agent Runs</h2>
          <DataTable columns={columns} data={sampleAgentRuns} />
        </div>
      </div>
    ),
  },
};