//source: https://www.joshwcomeau.com/react/dark-mode/
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IThemeContext {
  colorMode?: string;
  setColorMode: (value: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, rawSetColorMode] = useState<string>();

  useEffect(() => {
    const root = window.document.documentElement;
    const value = root.getAttribute("data-initial-theme") || undefined;
    rawSetColorMode(value);
    root.setAttribute("data-theme", value || "");
  }, []);

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

export const useTheme = () => {
  return useContext(ThemeContext);
};
