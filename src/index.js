import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuoteCurrencyProvider } from './providers/CurrencyProvider';
import { ChainCurrencyProvider } from './providers/ChainProvider';
import { ThemeProvider } from './providers/ThemeProvider';

/* istanbul ignore next */
const queryClient = new QueryClient();

/* istanbul ignore next */
const root = ReactDOM.createRoot(document.getElementById('root'));
/* istanbul ignore next */
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <QuoteCurrencyProvider>
          <ChainCurrencyProvider>
            <App />
          </ChainCurrencyProvider>
        </QuoteCurrencyProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

/* istanbul ignore next */
reportWebVitals();
