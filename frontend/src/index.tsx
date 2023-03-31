import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </Provider>
);

