import React from 'react';

import DarkToggle from './input/DarkToggle';
import ButtonSystemTheme from './input/ButtonSystemTheme';

const Header = () => {
  return (
    <header className="absolute right-4 md:right-0 top-4">
      <div className="flex items-center">
        <ButtonSystemTheme />
        <DarkToggle />
      </div>
    </header>
  );
};

export default Header;
