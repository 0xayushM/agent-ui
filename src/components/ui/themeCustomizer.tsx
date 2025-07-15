"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Check, Paintbrush } from "lucide-react";

// A predefined list of colors for the user to choose from
const colorSwatches = {
  primary: [
    { value: "rgba(240, 5, 9, 1)", name: "Default" },
    { value: "rgba(0, 84, 2, 1)", name: "Red" },
    { value: "rgba(262, 83, 57, 1)", name: "Purple" },
  ],
  secondary: [
    { value: "rgba(240, 4, 95, 1)", name: "Default" },
    { value: "rgba(34, 91, 71, 1)", name: "Orange" },
    { value: "rgba(142, 76, 36, 1)", name: "Green" },
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
    { value: "rgba(346, 77, 49, 1)", name: "Rose Pink" },
  ],
};

export function ThemeCustomizer() {
  const { theme, updateThemeColor, resetTheme } = useTheme();

  if (!theme) {
    return null; // Don't render until theme is loaded on client
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Paintbrush className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="space-y-4">
          <h4 className="font-semibold leading-none">Customize Theme</h4>
          
          {/* Primary Color Section */}
          <div>
            <label className="text-sm font-medium">Primary</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {colorSwatches.primary.map((color) => (
                <button
                  key={color.value}
                  className={cn("h-8 w-full rounded-md border", theme.primary === color.value && "ring-2 ring-ring ring-offset-2")}
                  style={{ backgroundColor: color.value }}
                  onClick={() => updateThemeColor("primary", color.value)}
                >
                  {theme.primary === color.value && <Check className="mx-auto size-4 text-white" />}
                </button>
              ))}
            </div>
          </div>
          
          {/* Secondary Color Section */}
          <div>
            <label className="text-sm font-medium">Secondary</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {colorSwatches.secondary.map((color) => (
                <button
                  key={color.value}
                  className={cn("h-8 w-full rounded-md border", theme.secondary === color.value && "ring-2 ring-ring ring-offset-2")}
                  style={{ backgroundColor: color.value }}
                  onClick={() => updateThemeColor("secondary", color.value)}
                >
                 {theme.secondary === color.value && <Check className="mx-auto size-4 text-primary" />}
                </button>
              ))}
            </div>
          </div>

          {/* Tertiary Color Section */}
          <div>
            <label className="text-sm font-medium">Tertiary</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {colorSwatches.tertiary.map((color) => (
                <button
                  key={color.value}
                  className={cn("h-8 w-full rounded-md border", theme.tertiary === color.value && "ring-2 ring-ring ring-offset-2")}
                  style={{ backgroundColor: color.value }}
                  onClick={() => updateThemeColor("tertiary", color.value)}
                >
                  {theme.tertiary === color.value && <Check className="mx-auto size-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          <Button variant="ghost" className="w-full justify-start" onClick={resetTheme}>
            Reset to Defaults
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}