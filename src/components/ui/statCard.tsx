import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  changeType?: "positive" | "negative";
  className?: string;
}

export function StatCard({ title, value, icon, change, changeType, className }: StatCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p
            className={cn(
              "text-xs text-muted-foreground",
              changeType === "positive" && "text-emerald-500",
              changeType === "negative" && "text-red-500"
            )}
          >
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

{/* <StatCard
  title="Active Agents"
  value="12"
  icon={<Cpu className="size-4 text-muted-foreground" />}
  change="+2 since last hour"
  changeType="positive"
/> */}