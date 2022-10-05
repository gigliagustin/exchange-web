import { useContext, createContext, useState } from 'react';

const quoteCurrencyContext = createContext();
const quoteCurrencyToggleContext = createContext();

export const QuoteCurrencyProvider = ({ children }) => {
  const [currentCoin, setCurrentCoin] = useState('USD');

  return (
    <quoteCurrencyContext.Provider value={currentCoin}>
        <quoteCurrencyToggleContext.Provider value={setCurrentCoin}>
            {children}
        </quoteCurrencyToggleContext.Provider>
    </quoteCurrencyContext.Provider>
  );
};

export const useQuoteCurrencyContext = () => {
  return useContext(quoteCurrencyContext);
};

export const useQuoteCurrencyToggleContext = () => {
  return useContext(quoteCurrencyToggleContext);
};
