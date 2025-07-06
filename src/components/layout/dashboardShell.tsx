// src/components/layout/DashboardShell.tsx
"use client"
import * as React from "react"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"
import { Toaster } from "@/components/ui/sonner"

export const DashboardShell = ({
  children,
  sidebar,
  topbar,
}: {
  children: React.ReactNode
  sidebar?: React.ReactNode
  topbar?: React.ReactNode
}) => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      {sidebar ?? <Sidebar />}

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {topbar ?? <Topbar />}
        <main className="flex-1 overflow-y-auto bg-muted p-4">
          {children}
        </main>
        <Toaster />
      </div>
    </div>
  )
}
