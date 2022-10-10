import React, { useState } from 'react';
import { Convertion } from './components/Convertion';
import useHistorical from './hooks/useHistorical';
import { useQuoteCurrencyContext } from './providers/CurrencyProvider';
import { Graph } from './components/Graph';
import { Navbar } from './components/Navbar';
import { chains } from './constants';

const App = () => {
  const [contractAddress, setContractAddress] = useState();
  const currentCoin = useQuoteCurrencyContext();
  const chainsId = chains.filter(chain => chain.contractAddress === contractAddress);
  const chainId = chainsId[0]?.chainId;
  const { historical, isError, isLoading } = useHistorical(contractAddress, chainId, currentCoin);

  const handleChange = (e) => {
    setContractAddress(e.target.value);
  };

  return (
    <div>
      <Convertion />
      <Navbar/>
      <section id='graphic' className='container mt-3'>
        <select
          name='cryptos'
          className='form-select mb-3'
          id='floating-select'
          onChange={handleChange}
        >
          <option>Choose a Crypto Chain</option>
          {
            chains.map((item) => (
              <option
                key={item.chainId}
                value={item.contractAddress}
              >
                {item.name}
              </option>
            ))}
        </select>
        <Graph isLoading={isLoading} isError={isError} historical={historical}/>
      </section>
    </div>
  );
};

export default App;
