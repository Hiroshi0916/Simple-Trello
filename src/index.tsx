import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { hydrateRoot } from 'react-dom/client';

let rootElement;
if (typeof window !== "undefined") {
  rootElement = document.getElementById('root');
}

// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(<App />);
// }

// if (rootElement) {
//   const hydrationRoot = ReactDOM.createRoot(rootElement);
//   hydrationRoot.hydrate(<App />);

// }

if (rootElement) {
  // const container = document.getElementById('app');
 const container = document.getElementById('root');
  if(container){
    const root = hydrateRoot(container, <App />);
  }
}
