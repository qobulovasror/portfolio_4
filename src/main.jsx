import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: '!bg-zinc-900 !text-white dark:!bg-zinc-100 dark:!text-zinc-900',
            duration: 4000,
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
