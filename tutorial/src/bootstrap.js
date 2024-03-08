import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';
const mount = (el) => {
  createRoot(el).render(<Provider store={store}><App /></Provider>);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#tutorial-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };