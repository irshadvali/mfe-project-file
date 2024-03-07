import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (el, dataFromHost) => {
  createRoot(el).render(<App dataFromHost={dataFromHost}/>);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dashboard-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };