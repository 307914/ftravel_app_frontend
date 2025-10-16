import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ContextProvider,
  DateContetProvider,
  FilterContextProvider,
} from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components';
import { AuthContextProvider } from './context/auth-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <DateContetProvider>
          <FilterContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </FilterContextProvider>
        </DateContetProvider>
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
