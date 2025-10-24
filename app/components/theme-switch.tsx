"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="dark"  // Force default theme to dark
      enableSystem={false} // Disable system detection
    >
      {children}
    </NextThemesProvider>
  );
}