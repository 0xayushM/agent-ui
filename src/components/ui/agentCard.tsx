// src/components/AgentCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type AgentCardProps = {
  name: string
  description: string
  status: "active" | "idle" | "error"
  children?: React.ReactNode
}

export const AgentCard = ({ name, description, status, children }: AgentCardProps) => {
  const statusColor =
    status === "active"
      ? "text-green-500"
      : status === "error"
      ? "text-red-500"
      : "text-muted-foreground"

  return (
    <Card className="w-full shadow-sm border">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {name}
          <span className={`text-sm font-medium ${statusColor}`}>{status}</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
