var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/sonner.tsx
var sonner_exports = {};
__export(sonner_exports, {
  Toaster: () => Toaster
});
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
var Toaster;
var init_sonner = __esm({
  "src/components/ui/sonner.tsx"() {
    "use strict";
    "use client";
    Toaster = (_a) => {
      var props = __objRest(_a, []);
      const { theme = "system" } = useTheme();
      return /* @__PURE__ */ React.createElement(
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
  }
});

// src/components/ui/agentCard.tsx
import * as React3 from "react";

// src/components/ui/card.tsx
import * as React2 from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/card.tsx
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className)
    }, props)
  );
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function CardAction(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("px-6", className)
    }, props)
  );
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className)
    }, props)
  );
}

// src/components/ui/agentCard.tsx
var AgentCard = ({
  name,
  description,
  status,
  children
}) => {
  const statusColor = status === "active" ? "text-green-500" : status === "error" ? "text-red-500" : "text-muted-foreground";
  return /* @__PURE__ */ React3.createElement(Card, { className: "w-full shadow-sm border" }, /* @__PURE__ */ React3.createElement(CardHeader, null, /* @__PURE__ */ React3.createElement(CardTitle, { className: "flex justify-between items-center" }, name, /* @__PURE__ */ React3.createElement("span", { className: `text-sm font-medium ${statusColor}` }, status)), /* @__PURE__ */ React3.createElement("p", { className: "text-sm text-muted-foreground" }, description)), /* @__PURE__ */ React3.createElement(CardContent, null, children));
};

// src/components/ui/button.tsx
import * as React4 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
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
  return /* @__PURE__ */ React4.createElement(
    Comp,
    __spreadValues({
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className }))
    }, props)
  );
}

// src/components/ui/promptForm.tsx
import * as React6 from "react";

// src/components/ui/input.tsx
import * as React5 from "react";
function Input(_a) {
  var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
  return /* @__PURE__ */ React5.createElement(
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
var PromptForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = React6.useState("");
  return /* @__PURE__ */ React6.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit(prompt);
      },
      className: "flex gap-2"
    },
    /* @__PURE__ */ React6.createElement(
      Input,
      {
        placeholder: "Ask the agent...",
        value: prompt,
        onChange: (e) => setPrompt(e.target.value)
      }
    ),
    /* @__PURE__ */ React6.createElement(Button, { type: "submit" }, "Run")
  );
};

// src/components/ui/statusBadge.tsx
import * as React8 from "react";

// src/components/ui/badge.tsx
import * as React7 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
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
  return /* @__PURE__ */ React7.createElement(
    Comp,
    __spreadValues({
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}

// src/components/ui/statusBadge.tsx
var StatusBadge = ({ status }) => {
  const color = {
    success: "bg-green-500",
    pending: "bg-yellow-500",
    error: "bg-red-500"
  }[status];
  return /* @__PURE__ */ React8.createElement(Badge, { className: `${color} text-white capitalize` }, status);
};

// src/index.ts
init_sonner();

// src/components/layout/dashboardShell.tsx
import * as React9 from "react";

// src/components/layout/sidebar.tsx
import { Home, Settings, BarChart3 } from "lucide-react";
var Sidebar = () => {
  return /* @__PURE__ */ React.createElement("aside", { className: "w-64 bg-background border-r p-4 hidden md:block" }, /* @__PURE__ */ React.createElement("div", { className: "text-lg font-bold mb-6" }, "AgentUI"), /* @__PURE__ */ React.createElement("nav", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("a", { href: "#", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" }, /* @__PURE__ */ React.createElement(Home, { className: "h-4 w-4" }), " Dashboard"), /* @__PURE__ */ React.createElement("a", { href: "#", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" }, /* @__PURE__ */ React.createElement(BarChart3, { className: "h-4 w-4" }), " Analytics"), /* @__PURE__ */ React.createElement("a", { href: "#", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" }, /* @__PURE__ */ React.createElement(Settings, { className: "h-4 w-4" }), " Settings")));
};

// src/components/layout/topbar.tsx
var Topbar = () => {
  return /* @__PURE__ */ React.createElement("header", { className: "h-14 border-b bg-background flex items-center px-4 justify-between" }, /* @__PURE__ */ React.createElement("h1", { className: "text-lg font-semibold" }, "Agent Dashboard"), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-muted-foreground" }, "Welcome, Ayush"));
};

// src/components/layout/dashboardShell.tsx
var ToasterProvider = ({ children }) => {
  const [isMounted, setIsMounted] = React9.useState(false);
  React9.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return /* @__PURE__ */ React9.createElement(React9.Fragment, null, children);
  }
  const { Toaster: Toaster2 } = (init_sonner(), __toCommonJS(sonner_exports));
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, children, /* @__PURE__ */ React9.createElement(Toaster2, null));
};
var DashboardShell = ({
  children,
  sidebar,
  topbar,
  showToaster = true
}) => {
  const content = /* @__PURE__ */ React9.createElement("div", { className: "flex h-screen w-full" }, sidebar != null ? sidebar : /* @__PURE__ */ React9.createElement(Sidebar, null), /* @__PURE__ */ React9.createElement("div", { className: "flex flex-col flex-1" }, topbar != null ? topbar : /* @__PURE__ */ React9.createElement(Topbar, null), /* @__PURE__ */ React9.createElement("main", { className: "flex-1 overflow-y-auto bg-muted p-4" }, children)));
  return showToaster ? /* @__PURE__ */ React9.createElement(ToasterProvider, null, content) : content;
};

// src/components/theme-provider.tsx
import * as React10 from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function ThemeProvider(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React10.createElement(NextThemesProvider, __spreadValues({}, props), children);
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
