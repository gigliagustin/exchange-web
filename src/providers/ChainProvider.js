import { useContext, createContext, useState } from 'react';

const chainCurrencyContext = createContext();
const chainCurrencyToggleContext = createContext();

export const ChainCurrencyProvider = ({ children }) => {
  const [chain, setChain] = useState({
    name: 'Elige una criptomoneda',
    chainId: null,
    contractAddress: '',
  });
  return (
    <chainCurrencyContext.Provider value={chain}>
        <chainCurrencyToggleContext.Provider value={setChain}>
            { children }
        </chainCurrencyToggleContext.Provider>
    </chainCurrencyContext.Provider>
  );
};

export const useChainCurrencyContext = () => {
  return useContext(chainCurrencyContext);
};

export const useChainCurrencyToggleContext = () => {
  return useContext(chainCurrencyToggleContext);
};
