import React from 'react';
import { useAtom } from 'jotai';
import { Moon, Sun } from 'react-bootstrap-icons';

import useTheme, { setThemeWithStorageAtom } from '../hooks/use-theme';

import '../../assets/styles/dark-mode-toggle.scss';

// source: https://daveyhert.hashnode.dev/how-to-create-animated-toggle-switches-with-just-css-and-implement-a-dark-mode-feature
const DarkToggle = () => {
  const [theme] = useTheme();
  const [_, setTheme] = useAtom(setThemeWithStorageAtom);

  if (!theme) return null;

  return (
    <div className="switch-container cursor-pointer">
      <input
        id="dark-mode"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={(ev) => {
          setTheme(ev.target.checked ? 'dark' : 'light');
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
