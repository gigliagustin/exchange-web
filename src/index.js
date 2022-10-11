import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuoteCurrencyProvider } from './providers/CurrencyProvider';
import { ThemeProvider } from './providers/ThemeProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <QuoteCurrencyProvider>
          <App />
        </QuoteCurrencyProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
