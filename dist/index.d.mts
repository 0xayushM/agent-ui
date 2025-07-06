import * as react_jsx_runtime from 'react/jsx-runtime';
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
}) => react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare const PromptForm: ({ onSubmit }: {
    onSubmit: (input: string) => void;
}) => react_jsx_runtime.JSX.Element;

declare const StatusBadge: ({ status }: {
    status: "success" | "pending" | "error";
}) => react_jsx_runtime.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

declare const DashboardShell: ({ children, sidebar, topbar, }: {
    children: React.ReactNode;
    sidebar?: React.ReactNode;
    topbar?: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const Sidebar: () => react_jsx_runtime.JSX.Element;

declare const Topbar: () => react_jsx_runtime.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<"input">): react_jsx_runtime.JSX.Element;

declare function ThemeProvider({ children, ...props }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

export { AgentCard, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DashboardShell, Input, PromptForm, Sidebar, StatusBadge, ThemeProvider, Toaster, Topbar, buttonVariants };
