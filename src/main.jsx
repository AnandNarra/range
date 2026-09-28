import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { EnquiryCartProvider } from './context/EnquiryCartContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EnquiryCartProvider>
        <App />
      </EnquiryCartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
