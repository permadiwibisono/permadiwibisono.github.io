import React from "react";
import { Moon, Sun } from "react-bootstrap-icons";

import { ThemeContext } from "../context/theme";

import "../../assets/styles/dark-mode-toggle.scss";

// source: https://daveyhert.hashnode.dev/how-to-create-animated-toggle-switches-with-just-css-and-implement-a-dark-mode-feature

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  return (
    <div className="switch-container cursor-pointer">
      <input
        id="dark-mode"
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? "dark" : "light");
        }}
      />
      <label htmlFor="dark-mode">
        <Moon className="icon-moon" />
        <Sun className="icon-sun" />
        <span className="icon-ball" />
      </label>
    </div>
  );
};

export default DarkToggle;
