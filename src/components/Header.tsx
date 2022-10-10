import React from 'react';

import DarkToggle from './input/DarkToggle';

const Header = () => {
  return (
    <header className="absolute right-4 md:right-0 top-4">
      <DarkToggle />
    </header>
  );
};

export default Header;
