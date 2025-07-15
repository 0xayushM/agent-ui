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
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";

// src/components/ui/spinner.tsx
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { jsx as jsx3 } from "react/jsx-runtime";
var spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      default: "size-4",
      sm: "size-3",
      lg: "size-6",
      icon: "size-5"
    }
  },
  defaultVariants: {
    size: "default"
  }
});
function Spinner({ size }) {
  return /* @__PURE__ */ jsx3(Loader2, { className: cn(spinnerVariants({ size })) });
}

// src/components/ui/button.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var buttonVariants = cva2(
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
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false, isLoading, children } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild", "isLoading", "children"]);
    const Comp = asChild ? Slot : "button";
    props.disabled = isLoading || props.disabled;
    return /* @__PURE__ */ jsx4(
      Comp,
      __spreadProps(__spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props), {
        children: !asChild && isLoading ? /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx4(Spinner, {}),
          children
        ] }) : children
      })
    );
  }
);
Button.displayName = "Button";

// src/components/ui/promptForm.tsx
import * as React2 from "react";

// src/components/ui/input.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Input(_a) {
  var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
  return /* @__PURE__ */ jsx5(
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
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var PromptForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = React2.useState("");
  return /* @__PURE__ */ jsxs3(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit(prompt);
      },
      className: "flex gap-2",
      children: [
        /* @__PURE__ */ jsx6(
          Input,
          {
            placeholder: "Ask the agent...",
            value: prompt,
            onChange: (e) => setPrompt(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx6(Button, { type: "submit", children: "Run" })
      ]
    }
  );
};

// src/components/ui/badge.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var badgeVariants = cva3(
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
  return /* @__PURE__ */ jsx7(
    Comp,
    __spreadValues({
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}

// src/components/ui/statusBadge.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var StatusBadge = ({ status }) => {
  const color = {
    success: "bg-green-500",
    pending: "bg-yellow-500",
    error: "bg-red-500"
  }[status];
  return /* @__PURE__ */ jsx8(Badge, { className: `${color} text-white capitalize`, children: status });
};

// src/components/ui/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx as jsx9 } from "react/jsx-runtime";
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx9(
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

// src/components/layout/dashboardShell.tsx
import { useState as useState3 } from "react";

// src/components/layout/sidebar.tsx
import Link from "next/link";
import { ChevronsLeft, Menu } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
function Sidebar({
  navItems,
  isCollapsed,
  onCollapseToggle,
  className
}) {
  return /* @__PURE__ */ jsxs4(
    "aside",
    {
      className: cn(
        "relative flex h-screen flex-col border-r bg-background p-4 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between", children: [
          !isCollapsed && /* @__PURE__ */ jsx10("h1", { className: "text-lg font-bold", children: "AI Dashboard" }),
          /* @__PURE__ */ jsx10(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "h-8 w-8",
              onClick: onCollapseToggle,
              children: isCollapsed ? /* @__PURE__ */ jsx10(Menu, { className: "size-4" }) : /* @__PURE__ */ jsx10(ChevronsLeft, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx10("nav", { className: "mt-8 flex flex-1 flex-col gap-2", children: navItems.map((item) => /* @__PURE__ */ jsx10(
          Button,
          {
            variant: "ghost",
            className: cn(
              "justify-start gap-3",
              isCollapsed && "h-10 w-10 justify-center p-0"
            ),
            asChild: true,
            children: /* @__PURE__ */ jsxs4(Link, { href: item.href, children: [
              item.icon,
              !isCollapsed && /* @__PURE__ */ jsx10("span", { className: "flex-1", children: item.label }),
              item.badge && !isCollapsed && /* @__PURE__ */ jsx10(Badge, { variant: "secondary", children: item.badge })
            ] })
          },
          item.href
        )) })
      ]
    }
  );
}

// src/components/ui/dropdownMenu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx11(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx11(
    DropdownMenuPrimitive.Trigger,
    __spreadValues({
      "data-slot": "dropdown-menu-trigger"
    }, props)
  );
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsx11(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx11(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ) });
}
function DropdownMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ jsx11(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function DropdownMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ jsx11(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function DropdownMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx11(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}

// src/components/ui/avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx12 } from "react/jsx-runtime";
function Avatar(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx12(
    AvatarPrimitive.Root,
    __spreadValues({
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )
    }, props)
  );
}
function AvatarImage(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx12(
    AvatarPrimitive.Image,
    __spreadValues({
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className)
    }, props)
  );
}
function AvatarFallback(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx12(
    AvatarPrimitive.Fallback,
    __spreadValues({
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )
    }, props)
  );
}

// src/components/layout/header.tsx
import { Search, LogOut, Settings } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
function Header({ user, children }) {
  const userInitials = user.name.split(" ").map((n) => n[0]).join("");
  return /* @__PURE__ */ jsxs6("header", { className: "sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs6("div", { className: "relative flex-1", children: [
      /* @__PURE__ */ jsx13(Search, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx13(
        Input,
        {
          type: "search",
          placeholder: "Search agents, logs, or tasks...",
          className: "w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[336px]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-4", children: [
      children,
      " ",
      /* @__PURE__ */ jsxs6(DropdownMenu, { children: [
        /* @__PURE__ */ jsx13(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx13(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: /* @__PURE__ */ jsxs6(Avatar, { className: "h-9 w-9", children: [
          /* @__PURE__ */ jsx13(AvatarImage, { src: user.avatarUrl, alt: user.name }),
          /* @__PURE__ */ jsx13(AvatarFallback, { children: userInitials })
        ] }) }) }),
        /* @__PURE__ */ jsxs6(DropdownMenuContent, { align: "end", children: [
          /* @__PURE__ */ jsx13(DropdownMenuLabel, { children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ jsx13("p", { className: "text-sm font-medium leading-none", children: user.name }),
            /* @__PURE__ */ jsx13("p", { className: "text-xs leading-none text-muted-foreground", children: user.email })
          ] }) }),
          /* @__PURE__ */ jsx13(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs6(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx13(Settings, { className: "mr-2 size-4" }),
            /* @__PURE__ */ jsx13("span", { children: "Settings" })
          ] }),
          /* @__PURE__ */ jsx13(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs6(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx13(LogOut, { className: "mr-2 size-4" }),
            /* @__PURE__ */ jsx13("span", { children: "Log out" })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// src/components/layout/dashboardShell.tsx
import { PlusCircle } from "lucide-react";

// src/components/ui/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx14 } from "react/jsx-runtime";
function Popover(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Root, __spreadValues({ "data-slot": "popover" }, props));
}
function PopoverTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Trigger, __spreadValues({ "data-slot": "popover-trigger" }, props));
}
function PopoverContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx14(
    PopoverPrimitive.Content,
    __spreadValues({
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-white text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )
    }, props)
  ) });
}
function PopoverAnchor(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Anchor, __spreadValues({ "data-slot": "popover-anchor" }, props));
}

// src/hooks/useTheme.ts
import { useState as useState2, useEffect } from "react";
var defaultTheme = {
  primary: "240 5.9% 10%",
  secondary: "240 4.8% 95.9%",
  tertiary: "172.5 50.3% 46.9%"
};
function useTheme2() {
  const [theme, setTheme] = useState2(null);
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("app-theme");
      if (storedTheme) {
        const parsedTheme = JSON.parse(storedTheme);
        setTheme(parsedTheme);
        applyTheme(parsedTheme);
      } else {
        setTheme(defaultTheme);
        applyTheme(defaultTheme);
      }
    } catch (error) {
      setTheme(defaultTheme);
      applyTheme(defaultTheme);
    }
  }, []);
  const applyTheme = (colors) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--tertiary", colors.tertiary);
  };
  const updateThemeColor = (colorName, value) => {
    const newTheme = __spreadProps(__spreadValues({}, theme || defaultTheme), { [colorName]: value });
    setTheme(newTheme);
    localStorage.setItem("app-theme", JSON.stringify(newTheme));
    applyTheme(newTheme);
  };
  const resetTheme = () => {
    localStorage.removeItem("app-theme");
    window.location.reload();
  };
  return {
    theme,
    updateThemeColor,
    resetTheme
  };
}

// src/components/ui/themeCustomizer.tsx
import { Check, Paintbrush } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
var colorSwatches = {
  primary: [
    { value: "rgba(240, 5, 9, 1)", name: "Default" },
    { value: "rgba(0, 84, 2, 1)", name: "Red" },
    { value: "rgba(262, 83, 57, 1)", name: "Purple" }
  ],
  secondary: [
    { value: "rgba(240, 4, 95, 1)", name: "Default" },
    { value: "rgba(34, 91, 71, 1)", name: "Orange" },
    { value: "rgba(142, 76, 36, 1)", name: "Green" }
  ],
  tertiary: [
    // Your default Teal
    { value: "rgba(172, 50, 46, 1)", name: "Teal" },
    // The new colors we just defined
    { value: "rgba(24, 95, 53, 1)", name: "Orange" },
    { value: "rgba(204, 89, 53, 1)", name: "Sky Blue" },
    { value: "rgba(38, 92, 55, 1)", name: "Amber Gold" },
    { value: "rgba(142, 76, 36, 1)", name: "Emerald Green" },
    { value: "rgba(262, 83, 57, 1)", name: "Indigo Purple" },
    { value: "rgba(346, 77, 49, 1)", name: "Rose Pink" }
  ]
};
function ThemeCustomizer() {
  const { theme, updateThemeColor, resetTheme } = useTheme2();
  if (!theme) {
    return null;
  }
  return /* @__PURE__ */ jsxs7(Popover, { children: [
    /* @__PURE__ */ jsx15(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx15(Button, { variant: "outline", size: "icon", children: /* @__PURE__ */ jsx15(Paintbrush, { className: "size-4" }) }) }),
    /* @__PURE__ */ jsx15(PopoverContent, { className: "w-64", align: "end", children: /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h4", { className: "font-semibold leading-none", children: "Customize Theme" }),
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsx15("label", { className: "text-sm font-medium", children: "Primary" }),
        /* @__PURE__ */ jsx15("div", { className: "mt-2 grid grid-cols-3 gap-2", children: colorSwatches.primary.map((color) => /* @__PURE__ */ jsx15(
          "button",
          {
            className: cn("h-8 w-full rounded-md border", theme.primary === color.value && "ring-2 ring-ring ring-offset-2"),
            style: { backgroundColor: color.value },
            onClick: () => updateThemeColor("primary", color.value),
            children: theme.primary === color.value && /* @__PURE__ */ jsx15(Check, { className: "mx-auto size-4 text-white" })
          },
          color.value
        )) })
      ] }),
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsx15("label", { className: "text-sm font-medium", children: "Secondary" }),
        /* @__PURE__ */ jsx15("div", { className: "mt-2 grid grid-cols-3 gap-2", children: colorSwatches.secondary.map((color) => /* @__PURE__ */ jsx15(
          "button",
          {
            className: cn("h-8 w-full rounded-md border", theme.secondary === color.value && "ring-2 ring-ring ring-offset-2"),
            style: { backgroundColor: color.value },
            onClick: () => updateThemeColor("secondary", color.value),
            children: theme.secondary === color.value && /* @__PURE__ */ jsx15(Check, { className: "mx-auto size-4 text-primary" })
          },
          color.value
        )) })
      ] }),
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsx15("label", { className: "text-sm font-medium", children: "Tertiary" }),
        /* @__PURE__ */ jsx15("div", { className: "mt-2 grid grid-cols-3 gap-2", children: colorSwatches.tertiary.map((color) => /* @__PURE__ */ jsx15(
          "button",
          {
            className: cn("h-8 w-full rounded-md border", theme.tertiary === color.value && "ring-2 ring-ring ring-offset-2"),
            style: { backgroundColor: color.value },
            onClick: () => updateThemeColor("tertiary", color.value),
            children: theme.tertiary === color.value && /* @__PURE__ */ jsx15(Check, { className: "mx-auto size-4 text-white" })
          },
          color.value
        )) })
      ] }),
      /* @__PURE__ */ jsx15(Button, { variant: "ghost", className: "w-full justify-start", onClick: resetTheme, children: "Reset to Defaults" })
    ] }) })
  ] });
}

// src/components/layout/dashboardShell.tsx
import { jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
function DashboardShell({
  sidebarNavItems,
  user,
  children
}) {
  const [isCollapsed, setIsCollapsed] = useState3(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return /* @__PURE__ */ jsxs8("div", { className: "flex min-h-screen w-full bg-muted/40", children: [
    /* @__PURE__ */ jsx16(
      Sidebar,
      {
        navItems: sidebarNavItems || [],
        isCollapsed,
        onCollapseToggle: toggleSidebar
      }
    ),
    /* @__PURE__ */ jsxs8("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxs8(Header, { user: user || { name: "User", email: "user@example.com" }, children: [
        /* @__PURE__ */ jsx16(ThemeCustomizer, {}),
        /* @__PURE__ */ jsxs8(Button, { size: "sm", className: "gap-1", children: [
          /* @__PURE__ */ jsx16(PlusCircle, { className: "size-3.5" }),
          /* @__PURE__ */ jsx16("span", { className: "sr-only sm:not-sr-only sm:whitespace-nowrap", children: "New Agent" })
        ] })
      ] }),
      /* @__PURE__ */ jsx16("main", { className: "flex-1 p-4 sm:p-6", children })
    ] })
  ] });
}

// src/components/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jsx as jsx17 } from "react/jsx-runtime";
function ThemeProvider(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx17(NextThemesProvider, __spreadProps(__spreadValues({}, props), { children }));
}

// src/components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx18 } from "react/jsx-runtime";
function Label2(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx18(
    LabelPrimitive.Root,
    __spreadValues({
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )
    }, props)
  );
}

// src/components/layout/loginLayout.tsx
import { jsx as jsx19, jsxs as jsxs9 } from "react/jsx-runtime";
function LoginLayout(_a) {
  var _b = _a, {
    className,
    title,
    description,
    oauthProviders = [],
    onOAuthSubmit,
    showCredentialsLogin = true,
    onCredentialsSubmit,
    credentialsSubmitLabel = "Login",
    dividerText = "Or continue with",
    forgotPasswordLink,
    signUpLink,
    legalFooter
  } = _b, props = __objRest(_b, [
    "className",
    "title",
    "description",
    "oauthProviders",
    "onOAuthSubmit",
    "showCredentialsLogin",
    "onCredentialsSubmit",
    "credentialsSubmitLabel",
    "dividerText",
    "forgotPasswordLink",
    "signUpLink",
    "legalFooter"
  ]);
  return /* @__PURE__ */ jsxs9("div", __spreadProps(__spreadValues({ className: cn("w-full max-w-md", className) }, props), { children: [
    /* @__PURE__ */ jsxs9(Card, { children: [
      /* @__PURE__ */ jsxs9(CardHeader, { className: "text-center", children: [
        /* @__PURE__ */ jsx19(CardTitle, { className: "text-2xl", children: title }),
        /* @__PURE__ */ jsx19(CardDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsx19(CardContent, { children: /* @__PURE__ */ jsxs9("div", { className: "grid gap-6", children: [
        oauthProviders.length > 0 && /* @__PURE__ */ jsx19("div", { className: "flex flex-col gap-4", children: oauthProviders.map((provider) => /* @__PURE__ */ jsx19("form", { action: () => onOAuthSubmit(provider.id), children: /* @__PURE__ */ jsxs9(Button, { type: "submit", variant: "outline", className: "w-full", children: [
          provider.icon,
          provider.label
        ] }) }, provider.id)) }),
        oauthProviders.length > 0 && showCredentialsLogin && /* @__PURE__ */ jsx19("div", { className: "relative text-sm text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border", children: /* @__PURE__ */ jsx19("span", { className: "relative z-10 bg-background px-2 text-muted-foreground", children: dividerText }) }),
        showCredentialsLogin && /* @__PURE__ */ jsx19("form", { action: onCredentialsSubmit, children: /* @__PURE__ */ jsxs9("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ jsxs9("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx19(Label2, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx19(Input, { id: "email", type: "email", name: "email", placeholder: "m@example.com", required: true })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxs9("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx19(Label2, { htmlFor: "password", children: "Password" }),
              forgotPasswordLink && /* @__PURE__ */ jsx19("a", { href: forgotPasswordLink.href, className: "ml-auto text-sm underline-offset-4 hover:underline", children: forgotPasswordLink.label || "Forgot your password?" })
            ] }),
            /* @__PURE__ */ jsx19(Input, { id: "password", name: "password", type: "password", required: true })
          ] }),
          /* @__PURE__ */ jsx19(Button, { type: "submit", className: "w-full", children: credentialsSubmitLabel })
        ] }) }),
        signUpLink && /* @__PURE__ */ jsxs9("div", { className: "text-sm text-center", children: [
          signUpLink.text || "Don't have an account? ",
          /* @__PURE__ */ jsx19("a", { href: signUpLink.href, className: "underline underline-offset-4", children: signUpLink.label || "Sign up" })
        ] })
      ] }) })
    ] }),
    legalFooter && /* @__PURE__ */ jsx19("div", { className: "mt-4 text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary", children: legalFooter })
  ] }));
}

// src/components/ui/checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon as CheckIcon2 } from "lucide-react";
import { jsx as jsx20 } from "react/jsx-runtime";
function Checkbox(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx20(
    CheckboxPrimitive.Root,
    __spreadProps(__spreadValues({
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx20(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx20(CheckIcon2, { className: "size-3.5" })
        }
      )
    })
  );
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
  Checkbox,
  DashboardShell,
  Header,
  Input,
  Label2 as Label,
  LoginLayout,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  PromptForm,
  Sidebar,
  StatusBadge,
  ThemeCustomizer,
  ThemeProvider,
  Toaster,
  buttonVariants
};
//# sourceMappingURL=index.mjs.map