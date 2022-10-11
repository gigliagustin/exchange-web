import React from 'react';
import { Convertion } from './components/Convertion';
import useHistorical from './hooks/useHistorical';
import { useQuoteCurrencyContext } from './providers/CurrencyProvider';
import { Graph } from './components/Graph';
import { Navbar } from './components/Navbar';
import { chains } from './constants';
import { useChainCurrencyContext } from './providers/ChainProvider';

const App = () => {
  const currentCoin = useQuoteCurrencyContext();
  const chainValue = useChainCurrencyContext();
  const { contractAddress } = chainValue.contractAddress;
  const chainsId = chains.filter(chain => chain.contractAddress === contractAddress);
  const chainId = chainsId[0]?.chainId;
  const { historical, isError, isLoading } = useHistorical(contractAddress, chainId, currentCoin);

  return (
    <div>
      <Navbar/>
      <section id='conversor' className='container mt-3 border rounded shadow'>
            <Convertion quoteCurrency={currentCoin} contractAddress={contractAddress} />
      </section>
      <section id='graphic' className='container mt-3'>
        <Graph isLoading={isLoading} isError={isError} historical={historical}/>
      </section>
    </div>
  );
};

export default App;
