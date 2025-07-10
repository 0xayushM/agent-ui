"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronsLeft, Menu } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string | number;
}

interface SidebarProps {
  navItems: NavItem[];
  isCollapsed: boolean;
  onCollapseToggle: () => void;
  className?: string;
}

export function Sidebar({
  navItems,
  isCollapsed,
  onCollapseToggle,
  className,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "relative flex h-screen flex-col border-r bg-background p-4 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-lg font-bold">AI Dashboard</h1>
        )}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={onCollapseToggle}
        >
          {isCollapsed ? <Menu className="size-4" /> : <ChevronsLeft className="size-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-1 flex-col gap-2">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            className={cn(
              "justify-start gap-3",
              isCollapsed && "h-10 w-10 justify-center p-0"
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              {!isCollapsed && <span className="flex-1">{item.label}</span>}
              {item.badge && !isCollapsed && (
                <Badge variant="secondary">{item.badge}</Badge>
              )}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}