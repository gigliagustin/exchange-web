import React from 'react';
import classNames from 'classnames';
import { Convertion } from './components/Convertion';
import useHistorical from './hooks/useHistorical';
import { useQuoteCurrencyContext } from './providers/CurrencyProvider';
import { AboutUs } from './components/AboutUs';
import { Graph } from './components/Graph';
import { Navbar } from './components/Navbar';
import { chains } from './constants';
import { useChainCurrencyContext } from './providers/ChainProvider';
import { useThemeContext } from './providers/ThemeProvider';
import { Footer } from './components/Footer';

const App = () => {
  const theme = useThemeContext();
  const currentCoin = useQuoteCurrencyContext();
  const chainValue = useChainCurrencyContext();
  const { contractAddress } = chainValue.contractAddress;
  const chainsId = chains.filter(
    (chain) => chain.contractAddress === contractAddress,
  );
  const chainId = chainsId[0]?.chainId;
  const { historical, isError, isLoading } = useHistorical(
    contractAddress,
    chainId,
    currentCoin,
  );

  return (
    <div className={classNames('App', {
      'bg-light': theme === 'light',
      'bg-dark': theme === 'dark',
    })}>
      <Navbar/>
      <section id='conversor' className='container mt-3 border rounded shadow py-3'>
        <Convertion quoteCurrency={currentCoin} contractAddress={contractAddress} />
      </section>
      <section id='graphic' className='container mt-3 border rounded shadow py-3'>
        <Graph
          isLoading={isLoading}
          isError={isError}
          historical={historical}
        />
      </section>
      <AboutUs />
      <Footer/>
    </div>
  );
};

export default App;
