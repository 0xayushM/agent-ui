import * as React$1 from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ToasterProps } from 'sonner';
import { ThemeProviderProps } from 'next-themes';

declare const AgentCard: ({ name, description, status, children, }: {
    name: string;
    description: string;
    status: "active" | "idle" | "error";
    children?: React$1.ReactNode;
}) => React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const PromptForm: ({ onSubmit }: {
    onSubmit: (input: string) => void;
}) => React$1.JSX.Element;

declare const StatusBadge: ({ status }: {
    status: "success" | "pending" | "error";
}) => React$1.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React$1.JSX.Element;

interface NavItem {
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
declare function Sidebar({ navItems, isCollapsed, onCollapseToggle, className, }: SidebarProps): React$1.JSX.Element;

interface User$1 {
    name: string;
    email: string;
    avatarUrl?: string;
}
interface DashboardShellProps {
    sidebarNavItems?: NavItem[];
    user?: User$1;
    children?: React.ReactNode;
}
declare function DashboardShell({ sidebarNavItems, user, children, }: DashboardShellProps): React$1.JSX.Element;

interface User {
    name: string;
    email: string;
    avatarUrl?: string;
}
interface HeaderProps {
    user: User;
    children?: React.ReactNode;
}
declare function Header({ user, children }: HeaderProps): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare function ThemeProvider({ children, ...props }: ThemeProviderProps): React$1.JSX.Element;

export { AgentCard, Button, type ButtonProps, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DashboardShell, Header, Input, type NavItem, PromptForm, Sidebar, StatusBadge, ThemeProvider, Toaster, buttonVariants };
