import * as React from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ToasterProps } from 'sonner';
import { ThemeProviderProps } from 'next-themes';

declare const AgentCard: ({ name, description, status, children, }: {
    name: string;
    description: string;
    status: "active" | "idle" | "error";
    children?: React.ReactNode;
}) => React.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;

declare const PromptForm: ({ onSubmit }: {
    onSubmit: (input: string) => void;
}) => React.JSX.Element;

declare const StatusBadge: ({ status }: {
    status: "success" | "pending" | "error";
}) => React.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React.JSX.Element;

declare const DashboardShell: ({ children, sidebar, topbar, showToaster, }: {
    children: React.ReactNode;
    sidebar?: React.ReactNode;
    topbar?: React.ReactNode;
    showToaster?: boolean;
}) => React.JSX.Element;

declare const Sidebar: () => React.JSX.Element;

declare const Topbar: () => React.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<"input">): React.JSX.Element;

declare function ThemeProvider({ children, ...props }: ThemeProviderProps): React.JSX.Element;

export { AgentCard, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DashboardShell, Input, PromptForm, Sidebar, StatusBadge, ThemeProvider, Toaster, Topbar, buttonVariants };
