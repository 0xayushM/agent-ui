"use client"
import * as React from "react"
import { Badge } from "@/components/ui/badge"

export const StatusBadge = ({ status }: { status: "success" | "pending" | "error" }) => {
  const color = {
    success: "bg-green-500",
    pending: "bg-yellow-500",
    error: "bg-red-500",
  }[status]

  return (
    <Badge className={`${color} text-white capitalize`}>
      {status}
    </Badge>
  )
}