"use client";

import { useState, useEffect } from "react";

// Define the shape of our theme object
type ThemeColors = {
  primary: string;
  secondary: string;
  tertiary: string;
};

// Define the default colors from your globals.css (as a fallback)
const defaultTheme: ThemeColors = {
  primary: "240 5.9% 10%",
  secondary: "240 4.8% 95.9%",
  tertiary: "172.5 50.3% 46.9%",
};

export function useTheme() {
  const [theme, setTheme] = useState<ThemeColors | null>(null);

  // Effect to load theme from localStorage and apply it on initial render
  useEffect(() => {
    // This code only runs on the client
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
        // If parsing fails, fall back to default
        setTheme(defaultTheme);
        applyTheme(defaultTheme);
    }
  }, []);

  const applyTheme = (colors: ThemeColors) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--tertiary", colors.tertiary);
  };

  const updateThemeColor = (colorName: keyof ThemeColors, value: string) => {
    const newTheme = { ...(theme || defaultTheme), [colorName]: value };
    setTheme(newTheme);
    localStorage.setItem("app-theme", JSON.stringify(newTheme));
    applyTheme(newTheme);
  };

  const resetTheme = () => {
    localStorage.removeItem("app-theme");
    // This is a simple way to reset. It removes the inline styles and forces
    // the browser to fall back to the :root styles in globals.css.
    // A page reload ensures all components re-render with the default theme.
    window.location.reload();
  };

  return {
    theme,
    updateThemeColor,
    resetTheme,
  };
}
