var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/card.tsx
import { jsx } from "react/jsx-runtime";
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )
    }, props)
  );
}
function CardHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className)
    }, props)
  );
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function CardAction(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("px-6", className)
    }, props)
  );
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className)
    }, props)
  );
}

// src/components/ui/agentCard.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var AgentCard = ({
  name,
  description,
  status,
  children
}) => {
  const statusColor = status === "active" ? "text-green-500" : status === "error" ? "text-red-500" : "text-muted-foreground";
  return /* @__PURE__ */ jsxs(Card, { className: "w-full shadow-sm border", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardTitle, { className: "flex justify-between items-center", children: [
        name,
        /* @__PURE__ */ jsx2("span", { className: `text-sm font-medium ${statusColor}`, children: status })
      ] }),
      /* @__PURE__ */ jsx2("p", { className: "text-sm text-muted-foreground", children: description })
    ] }),
    /* @__PURE__ */ jsx2(CardContent, { children })
  ] });
};

// src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild"
  ]);
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx3(
    Comp,
    __spreadValues({
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className }))
    }, props)
  );
}

// src/components/ui/promptForm.tsx
import * as React from "react";

// src/components/ui/input.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Input(_a) {
  var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
  return /* @__PURE__ */ jsx4(
    "input",
    __spreadValues({
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )
    }, props)
  );
}

// src/components/ui/promptForm.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var PromptForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = React.useState("");
  return /* @__PURE__ */ jsxs2(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit(prompt);
      },
      className: "flex gap-2",
      children: [
        /* @__PURE__ */ jsx5(
          Input,
          {
            placeholder: "Ask the agent...",
            value: prompt,
            onChange: (e) => setPrompt(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx5(Button, { type: "submit", children: "Run" })
      ]
    }
  );
};

// src/components/ui/badge.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx6 } from "react/jsx-runtime";
var badgeVariants = cva2(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, {
    className,
    variant,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "asChild"
  ]);
  const Comp = asChild ? Slot2 : "span";
  return /* @__PURE__ */ jsx6(
    Comp,
    __spreadValues({
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}

// src/components/ui/statusBadge.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var StatusBadge = ({ status }) => {
  const color = {
    success: "bg-green-500",
    pending: "bg-yellow-500",
    error: "bg-red-500"
  }[status];
  return /* @__PURE__ */ jsx7(Badge, { className: `${color} text-white capitalize`, children: status });
};

// src/components/ui/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx as jsx8 } from "react/jsx-runtime";
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx8(
    Sonner,
    __spreadValues({
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      }
    }, props)
  );
};

// src/components/layout/sidebar.tsx
import { Home, Settings, BarChart3 } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var Sidebar = () => {
  return /* @__PURE__ */ jsxs3("aside", { className: "w-64 bg-background border-r p-4 hidden md:block", children: [
    /* @__PURE__ */ jsx9("div", { className: "text-lg font-bold mb-6", children: "AgentUI" }),
    /* @__PURE__ */ jsxs3("nav", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs3("a", { href: "#", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsx9(Home, { className: "h-4 w-4" }),
        " Dashboard"
      ] }),
      /* @__PURE__ */ jsxs3("a", { href: "#", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsx9(BarChart3, { className: "h-4 w-4" }),
        " Analytics"
      ] }),
      /* @__PURE__ */ jsxs3("a", { href: "#", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsx9(Settings, { className: "h-4 w-4" }),
        " Settings"
      ] })
    ] })
  ] });
};

// src/components/layout/topbar.tsx
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var Topbar = () => {
  return /* @__PURE__ */ jsxs4("header", { className: "h-14 border-b bg-background flex items-center px-4 justify-between", children: [
    /* @__PURE__ */ jsx10("h1", { className: "text-lg font-semibold", children: "Agent Dashboard" }),
    /* @__PURE__ */ jsx10("div", { className: "text-sm text-muted-foreground", children: "Welcome, Ayush" })
  ] });
};

// src/components/layout/dashboardShell.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var DashboardShell = ({
  children,
  sidebar,
  topbar
}) => {
  return /* @__PURE__ */ jsxs5("div", { className: "flex h-screen w-full", children: [
    sidebar != null ? sidebar : /* @__PURE__ */ jsx11(Sidebar, {}),
    /* @__PURE__ */ jsxs5("div", { className: "flex flex-col flex-1", children: [
      topbar != null ? topbar : /* @__PURE__ */ jsx11(Topbar, {}),
      /* @__PURE__ */ jsx11("main", { className: "flex-1 overflow-y-auto bg-muted p-4", children }),
      /* @__PURE__ */ jsx11(Toaster, {})
    ] })
  ] });
};

// src/components/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jsx as jsx12 } from "react/jsx-runtime";
function ThemeProvider(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx12(NextThemesProvider, __spreadProps(__spreadValues({}, props), { children }));
}
export {
  AgentCard,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DashboardShell,
  Input,
  PromptForm,
  Sidebar,
  StatusBadge,
  ThemeProvider,
  Toaster,
  Topbar,
  buttonVariants
};
