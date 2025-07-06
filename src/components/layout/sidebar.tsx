import { Home, Settings, BarChart3 } from "lucide-react"

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-background border-r p-4 hidden md:block">
      <div className="text-lg font-bold mb-6">AgentUI</div>
      <nav className="space-y-3">
        <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <Home className="h-4 w-4" /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <BarChart3 className="h-4 w-4" /> Analytics
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <Settings className="h-4 w-4" /> Settings
        </a>
      </nav>
    </aside>
  )
}