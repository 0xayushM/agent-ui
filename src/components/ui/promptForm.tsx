"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const PromptForm = ({ onSubmit }: { onSubmit: (input: string) => void }) => {
  const [prompt, setPrompt] = React.useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(prompt)
      }}
      className="flex gap-2"
    >
      <Input
        placeholder="Ask the agent..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button type="submit">Run</Button>
    </form>
  )
}