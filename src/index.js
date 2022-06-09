import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { Layout } from './Layout/layout';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
   <Layout>
   <App/>
</Layout>   </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
