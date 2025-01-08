import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ScrollToTop } from './component/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router future={{ v7_relativeSplatPath: true,v7_startTransition: true }}>
      <ScrollToTop/>
      <App />
    </Router>

  </React.StrictMode>
);