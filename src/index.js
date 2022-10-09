import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuoteCurrencyProvider } from './providers/CurrencyProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QuoteCurrencyProvider>
        <App />
      </QuoteCurrencyProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
