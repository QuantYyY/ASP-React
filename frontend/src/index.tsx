import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Theme preset={presetGpnDefault}>
    <App />
  </Theme>
);

