import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import './src/assets/styles/global.scss';

import App from './src/components/App';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <App>{element}</App>;
};
