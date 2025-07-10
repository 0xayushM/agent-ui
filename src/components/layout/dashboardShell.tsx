"use client";

import { useState } from "react";
import { Sidebar, NavItem } from "./sidebar";
import { Header } from "./header";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface DashboardShellProps {
  sidebarNavItems: NavItem[];
  user: User;
  children: React.ReactNode;
}

export function DashboardShell({
  sidebarNavItems,
  user,
  children,
}: DashboardShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <Sidebar
        navItems={sidebarNavItems}
        isCollapsed={isCollapsed}
        onCollapseToggle={toggleSidebar}
      />
      <div className="flex flex-1 flex-col">
        <Header user={user}>
          <Button size="sm" className="gap-1">
            <PlusCircle className="size-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              New Agent
            </span>
          </Button>
        </Header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}