import React from "react";
import "./src/assets/styles/global.scss";

import App from "./src/components/App";

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
