import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (el, dataFromHostForCart) => {
  createRoot(el).render(<App dataFromHostForCart={dataFromHostForCart}/>);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#cart-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };