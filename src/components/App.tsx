import React from 'react';
import { Provider } from 'jotai';

function App({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}

export default App;
