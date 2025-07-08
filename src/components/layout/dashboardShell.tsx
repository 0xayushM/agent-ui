"use client"
import * as React from "react"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"

// Import Toaster dynamically to avoid server-side rendering issues
const ToasterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{children}</>
  }

  // Dynamically import the Toaster only on the client side
  const { Toaster } = require("@/components/ui/sonner")
  
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

export const DashboardShell = ({
  children,
  sidebar,
  topbar,
  showToaster = true,
}: {
  children: React.ReactNode
  sidebar?: React.ReactNode
  topbar?: React.ReactNode
  showToaster?: boolean
}) => {
  const content = (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      {sidebar ?? <Sidebar />}

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {topbar ?? <Topbar />}
        <main className="flex-1 overflow-y-auto bg-muted p-4">
          {children}
        </main>
      </div>
    </div>
  )

  // Wrap with ToasterProvider only if showToaster is true
  return showToaster ? <ToasterProvider>{content}</ToasterProvider> : content
}
