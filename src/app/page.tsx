import Image from "next/image";
import * as React from 'react'
import { AgentCard } from "@/components/ui/agentCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <AgentCard name="Agent 1" description="Description" status="active">
        <p>Content</p>
      </AgentCard>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Button>Button</Button>
    </div>
  );
}
