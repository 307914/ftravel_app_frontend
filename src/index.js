import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider, DateContetProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <DateContetProvider>
          <App />
        </DateContetProvider>
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
