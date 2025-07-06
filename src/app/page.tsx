"use client"

import * as React from "react"
import { DashboardShell } from "@/components/layout/dashboardShell"
import { AgentCard } from "@/components/ui/agentCard"
import { Button } from "@/components/ui/button"
import { PromptForm } from "@/components/ui/promptForm"
import { StatusBadge } from "@/components/ui/statusBadge"
import { toast } from "sonner"

export default function Page() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AgentCard
          name="Finance Agent"
          description="Categorizing recent transactions"
          status="active"
        >
          <Button
            onClick={() => toast.success("Finance Agent triggered")}
          >
            Run Agent
          </Button>
        </AgentCard>

        <AgentCard
          name="Riskalyze"
          description="Evaluating insurance data"
          status="idle"
        >
          <PromptForm
            onSubmit={(val) => toast("Prompt: " + val)}
          />
        </AgentCard>

        <AgentCard
          name="HR Agent"
          description="Analyzing resumes"
          status="error"
        >
          <StatusBadge status="error" />
        </AgentCard>
      </div>
    </DashboardShell>
  )
}