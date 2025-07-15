var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
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
import { cva as cva2 } from "class-variance-authority";

// src/components/ui/spinner.tsx
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
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
  return /* @__PURE__ */ React.createElement(Loader2, { className: cn(spinnerVariants({ size })) });
}

// src/components/ui/button.tsx
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
var Button = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false, isLoading, children } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild", "isLoading", "children"]);
    const Comp = asChild ? Slot : "button";
    props.disabled = isLoading || props.disabled;
    return /* @__PURE__ */ React4.createElement(
      Comp,
      __spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props),
      !asChild && isLoading ? /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Spinner, null), children) : children
    );
  }
);
Button.displayName = "Button";

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
import { cva as cva3 } from "class-variance-authority";
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

// node_modules/next-themes/dist/index.mjs
import * as t from "react";
var M = (e, i, s, u, m, a, l, h) => {
  let d = document.documentElement, w = ["light", "dark"];
  function p(n) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
      k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
    }), R(n);
  }
  function R(n) {
    h && w.includes(n) && (d.style.colorScheme = n);
  }
  function c() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) p(u);
  else try {
    let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
    p(y);
  } catch (n) {
  }
};
var b = ["light", "dark"];
var I = "(prefers-color-scheme: dark)";
var O = typeof window == "undefined";
var x = t.createContext(void 0);
var U = { setTheme: (e) => {
}, themes: [] };
var z = () => {
  var e;
  return (e = t.useContext(x)) != null ? e : U;
};
var J = (e) => t.useContext(x) ? t.createElement(t.Fragment, null, e.children) : t.createElement(V, __spreadValues({}, e));
var N = ["light", "dark"];
var V = ({ forcedTheme: e, disableTransitionOnChange: i = false, enableSystem: s = true, enableColorScheme: u = true, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R }) => {
  let [c, n] = t.useState(() => H(m, l)), [T, y] = t.useState(() => c === "system" ? E() : c), k = d ? Object.values(d) : a, S = t.useCallback((o) => {
    let r = o;
    if (!r) return;
    o === "system" && s && (r = E());
    let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g) => {
      g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
    };
    if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
      let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
      P.style.colorScheme = D;
    }
    C == null || C();
  }, [p]), f = t.useCallback((o) => {
    let r = typeof o == "function" ? o(c) : o;
    n(r);
    try {
      localStorage.setItem(m, r);
    } catch (v) {
    }
  }, [c]), A = t.useCallback((o) => {
    let r = E(o);
    y(r), c === "system" && s && !e && S("system");
  }, [c, e]);
  t.useEffect(() => {
    let o = window.matchMedia(I);
    return o.addListener(A), A(o), () => o.removeListener(A);
  }, [A]), t.useEffect(() => {
    let o = (r) => {
      r.key === m && (r.newValue ? n(r.newValue) : f(l));
    };
    return window.addEventListener("storage", o), () => window.removeEventListener("storage", o);
  }, [f]), t.useEffect(() => {
    S(e != null ? e : c);
  }, [e, c]);
  let Q = t.useMemo(() => ({ theme: c, setTheme: f, forcedTheme: e, resolvedTheme: c === "system" ? T : c, themes: s ? [...a, "system"] : a, systemTheme: s ? T : void 0 }), [c, f, e, T, s, a]);
  return t.createElement(x.Provider, { value: Q }, t.createElement(_, { forcedTheme: e, storageKey: m, attribute: h, enableSystem: s, enableColorScheme: u, defaultTheme: l, value: d, themes: a, nonce: p, scriptProps: R }), w);
};
var _ = t.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
  let p = JSON.stringify([s, i, a, e, h, l, u, m]).slice(1, -1);
  return t.createElement("script", __spreadProps(__spreadValues({}, w), { suppressHydrationWarning: true, nonce: typeof window == "undefined" ? d : "", dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` } }));
});
var H = (e, i) => {
  if (O) return;
  let s;
  try {
    s = localStorage.getItem(e) || void 0;
  } catch (u) {
  }
  return s || i;
};
var W = (e) => {
  let i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(i);
    }, 1);
  };
};
var E = (e) => (e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");

// src/components/ui/sonner.tsx
import { Toaster as Sonner } from "sonner";
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  const { theme = "system" } = z();
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

// src/components/layout/dashboardShell.tsx
import { useState as useState4 } from "react";

// src/components/layout/sidebar.tsx
import Link from "next/link";
import { ChevronsLeft, Menu } from "lucide-react";
function Sidebar({
  navItems,
  isCollapsed,
  onCollapseToggle,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "aside",
    {
      className: cn(
        "relative flex h-screen flex-col border-r bg-background p-4 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, !isCollapsed && /* @__PURE__ */ React.createElement("h1", { className: "text-lg font-bold" }, "AI Dashboard"), /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "outline",
        size: "icon",
        className: "h-8 w-8",
        onClick: onCollapseToggle
      },
      isCollapsed ? /* @__PURE__ */ React.createElement(Menu, { className: "size-4" }) : /* @__PURE__ */ React.createElement(ChevronsLeft, { className: "size-4" })
    )),
    /* @__PURE__ */ React.createElement("nav", { className: "mt-8 flex flex-1 flex-col gap-2" }, navItems.map((item) => /* @__PURE__ */ React.createElement(
      Button,
      {
        key: item.href,
        variant: "ghost",
        className: cn(
          "justify-start gap-3",
          isCollapsed && "h-10 w-10 justify-center p-0"
        ),
        asChild: true
      },
      /* @__PURE__ */ React.createElement(Link, { href: item.href }, item.icon, !isCollapsed && /* @__PURE__ */ React.createElement("span", { className: "flex-1" }, item.label), item.badge && !isCollapsed && /* @__PURE__ */ React.createElement(Badge, { variant: "secondary" }, item.badge))
    )))
  );
}

// src/components/ui/dropdownMenu.tsx
import * as React9 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React9.createElement(
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
  return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React9.createElement(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ));
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
  return /* @__PURE__ */ React9.createElement(
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
  return /* @__PURE__ */ React9.createElement(
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
  return /* @__PURE__ */ React9.createElement(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}

// src/components/ui/avatar.tsx
import * as React10 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
function Avatar(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React10.createElement(
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
  return /* @__PURE__ */ React10.createElement(
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
  return /* @__PURE__ */ React10.createElement(
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
function Header({ user, children }) {
  const userInitials = user.name.split(" ").map((n) => n[0]).join("");
  return /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "relative flex-1" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ React.createElement(
    Input,
    {
      type: "search",
      placeholder: "Search agents, logs, or tasks...",
      className: "w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[336px]"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, children, " ", /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full" }, /* @__PURE__ */ React.createElement(Avatar, { className: "h-9 w-9" }, /* @__PURE__ */ React.createElement(AvatarImage, { src: user.avatarUrl, alt: user.name }), /* @__PURE__ */ React.createElement(AvatarFallback, null, userInitials)))), /* @__PURE__ */ React.createElement(DropdownMenuContent, { align: "end" }, /* @__PURE__ */ React.createElement(DropdownMenuLabel, null, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col space-y-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium leading-none" }, user.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs leading-none text-muted-foreground" }, user.email))), /* @__PURE__ */ React.createElement(DropdownMenuSeparator, null), /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(Settings, { className: "mr-2 size-4" }), /* @__PURE__ */ React.createElement("span", null, "Settings")), /* @__PURE__ */ React.createElement(DropdownMenuSeparator, null), /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(LogOut, { className: "mr-2 size-4" }), /* @__PURE__ */ React.createElement("span", null, "Log out"))))));
}

// src/components/layout/dashboardShell.tsx
import { PlusCircle } from "lucide-react";

// src/components/ui/popover.tsx
import * as React11 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
function Popover(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React11.createElement(PopoverPrimitive.Root, __spreadValues({ "data-slot": "popover" }, props));
}
function PopoverTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React11.createElement(PopoverPrimitive.Trigger, __spreadValues({ "data-slot": "popover-trigger" }, props));
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
  return /* @__PURE__ */ React11.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React11.createElement(
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
  ));
}
function PopoverAnchor(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React11.createElement(PopoverPrimitive.Anchor, __spreadValues({ "data-slot": "popover-anchor" }, props));
}

// src/hooks/useTheme.ts
import { useState as useState3, useEffect as useEffect2 } from "react";
var defaultTheme = {
  primary: "240 5.9% 10%",
  secondary: "240 4.8% 95.9%",
  tertiary: "172.5 50.3% 46.9%"
};
function useTheme() {
  const [theme, setTheme] = useState3(null);
  useEffect2(() => {
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
  const { theme, updateThemeColor, resetTheme } = useTheme();
  if (!theme) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(Popover, null, /* @__PURE__ */ React.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "icon" }, /* @__PURE__ */ React.createElement(Paintbrush, { className: "size-4" }))), /* @__PURE__ */ React.createElement(PopoverContent, { className: "w-64", align: "end" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("h4", { className: "font-semibold leading-none" }, "Customize Theme"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "text-sm font-medium" }, "Primary"), /* @__PURE__ */ React.createElement("div", { className: "mt-2 grid grid-cols-3 gap-2" }, colorSwatches.primary.map((color) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: color.value,
      className: cn("h-8 w-full rounded-md border", theme.primary === color.value && "ring-2 ring-ring ring-offset-2"),
      style: { backgroundColor: color.value },
      onClick: () => updateThemeColor("primary", color.value)
    },
    theme.primary === color.value && /* @__PURE__ */ React.createElement(Check, { className: "mx-auto size-4 text-white" })
  )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "text-sm font-medium" }, "Secondary"), /* @__PURE__ */ React.createElement("div", { className: "mt-2 grid grid-cols-3 gap-2" }, colorSwatches.secondary.map((color) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: color.value,
      className: cn("h-8 w-full rounded-md border", theme.secondary === color.value && "ring-2 ring-ring ring-offset-2"),
      style: { backgroundColor: color.value },
      onClick: () => updateThemeColor("secondary", color.value)
    },
    theme.secondary === color.value && /* @__PURE__ */ React.createElement(Check, { className: "mx-auto size-4 text-primary" })
  )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "text-sm font-medium" }, "Tertiary"), /* @__PURE__ */ React.createElement("div", { className: "mt-2 grid grid-cols-3 gap-2" }, colorSwatches.tertiary.map((color) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: color.value,
      className: cn("h-8 w-full rounded-md border", theme.tertiary === color.value && "ring-2 ring-ring ring-offset-2"),
      style: { backgroundColor: color.value },
      onClick: () => updateThemeColor("tertiary", color.value)
    },
    theme.tertiary === color.value && /* @__PURE__ */ React.createElement(Check, { className: "mx-auto size-4 text-white" })
  )))), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", className: "w-full justify-start", onClick: resetTheme }, "Reset to Defaults"))));
}

// src/components/layout/dashboardShell.tsx
function DashboardShell({
  sidebarNavItems,
  user,
  children
}) {
  const [isCollapsed, setIsCollapsed] = useState4(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "flex min-h-screen w-full bg-muted/40" }, /* @__PURE__ */ React.createElement(
    Sidebar,
    {
      navItems: sidebarNavItems || [],
      isCollapsed,
      onCollapseToggle: toggleSidebar
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex flex-1 flex-col" }, /* @__PURE__ */ React.createElement(Header, { user: user || { name: "User", email: "user@example.com" } }, /* @__PURE__ */ React.createElement(ThemeCustomizer, null), /* @__PURE__ */ React.createElement(Button, { size: "sm", className: "gap-1" }, /* @__PURE__ */ React.createElement(PlusCircle, { className: "size-3.5" }), /* @__PURE__ */ React.createElement("span", { className: "sr-only sm:not-sr-only sm:whitespace-nowrap" }, "New Agent"))), /* @__PURE__ */ React.createElement("main", { className: "flex-1 p-4 sm:p-6" }, children)));
}

// src/components/theme-provider.tsx
import * as React12 from "react";
function ThemeProvider(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React12.createElement(J, __spreadValues({}, props), children);
}

// src/components/ui/label.tsx
import * as React13 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
function Label2(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React13.createElement(
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
  return /* @__PURE__ */ React.createElement("div", __spreadValues({ className: cn("w-full max-w-md", className) }, props), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, { className: "text-center" }, /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl" }, title), /* @__PURE__ */ React.createElement(CardDescription, null, description)), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "grid gap-6" }, oauthProviders.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-4" }, oauthProviders.map((provider) => /* @__PURE__ */ React.createElement("form", { key: provider.id, action: () => onOAuthSubmit(provider.id) }, /* @__PURE__ */ React.createElement(Button, { type: "submit", variant: "outline", className: "w-full" }, provider.icon, provider.label)))), oauthProviders.length > 0 && showCredentialsLogin && /* @__PURE__ */ React.createElement("div", { className: "relative text-sm text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border" }, /* @__PURE__ */ React.createElement("span", { className: "relative z-10 bg-background px-2 text-muted-foreground" }, dividerText)), showCredentialsLogin && /* @__PURE__ */ React.createElement("form", { action: onCredentialsSubmit }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-2" }, /* @__PURE__ */ React.createElement(Label2, { htmlFor: "email" }, "Email"), /* @__PURE__ */ React.createElement(Input, { id: "email", type: "email", name: "email", placeholder: "m@example.com", required: true })), /* @__PURE__ */ React.createElement("div", { className: "grid gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Label2, { htmlFor: "password" }, "Password"), forgotPasswordLink && /* @__PURE__ */ React.createElement("a", { href: forgotPasswordLink.href, className: "ml-auto text-sm underline-offset-4 hover:underline" }, forgotPasswordLink.label || "Forgot your password?")), /* @__PURE__ */ React.createElement(Input, { id: "password", name: "password", type: "password", required: true })), /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "w-full" }, credentialsSubmitLabel))), signUpLink && /* @__PURE__ */ React.createElement("div", { className: "text-sm text-center" }, signUpLink.text || "Don't have an account? ", /* @__PURE__ */ React.createElement("a", { href: signUpLink.href, className: "underline underline-offset-4" }, signUpLink.label || "Sign up"))))), legalFooter && /* @__PURE__ */ React.createElement("div", { className: "mt-4 text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary" }, legalFooter));
}

// src/components/ui/checkbox.tsx
import * as React14 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon as CheckIcon2 } from "lucide-react";
function Checkbox(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React14.createElement(
    CheckboxPrimitive.Root,
    __spreadValues({
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React14.createElement(
      CheckboxPrimitive.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center text-current transition-none"
      },
      /* @__PURE__ */ React14.createElement(CheckIcon2, { className: "size-3.5" })
    )
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
