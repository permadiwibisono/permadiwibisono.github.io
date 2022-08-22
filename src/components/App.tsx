import React from "react";

import { ThemeProvider } from "./context/theme";

function App({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default App;
