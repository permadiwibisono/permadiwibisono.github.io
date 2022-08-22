import React, { createContext, ReactNode, useState } from "react";

//source: https://www.joshwcomeau.com/react/dark-mode/
export function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light";
}

interface IThemeContext {
  colorMode: string;
  setColorMode: (value: string) => void;
}

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, rawSetColorMode] = useState(getInitialColorMode);
  const setColorMode = (value: string) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem("color-mode", value);
    const root = window.document.documentElement;
    root.setAttribute("data-theme", value);
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
