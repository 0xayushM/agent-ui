"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface ChartProps {
  data: any[];
  categories: { name: string; color: string }[];
  index: string; // The key for the x-axis
  title: string;
  type?: "line" | "bar";
  className?: string;
}

export function Chart({
  data,
  categories,
  index,
  title,
  type = "line",
  className,
}: ChartProps) {
  const ChartComponent = type === "line" ? LineChart : BarChart;
  // Properly type the ChartElement as a React component type
  const ChartElement: React.ComponentType<any> = type === "line" ? Line : Bar;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ChartComponent data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={index} />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            {categories.map((cat) => (
              <ChartElement
                key={cat.name}
                type="monotone"
                dataKey={cat.name}
                stroke={cat.color}
                fill={cat.color}
                strokeWidth={2}
              />
            ))}
          </ChartComponent>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

// const tokenData = [
//     { date: "Jan", "Agent A": 4000, "Agent B": 2400 },
//     { date: "Feb", "Agent A": 3000, "Agent B": 1398 },
//     // ... more data
//   ];
  
//   <Chart
//     title="Token Usage Over Time"
//     data={tokenData}
//     index="date"
//     categories={[
//       { name: "Agent A", color: "hsl(var(--primary))" },
//       { name: "Agent B", color: "hsl(var(--secondary))" },
//     ]}
//     type="line"
//   />