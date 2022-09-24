import React, { useEffect, useState } from 'react';
import { chains } from '../../constants';
import useHistorical from '../../hooks/useHistorical';

const Graph = () => {
  const [contractAddress, setContractAddress] = useState();
  const chainsId = chains.filter(chain => chain.contractAddress === contractAddress);
  const chainId = chainsId[0]?.chainId;
  const { historical, isError, isLoading } = useHistorical(contractAddress, chainId);
  useEffect(() => {
    if (!isLoading && !isError) {
      console.log(historical);
    }
  }, []);

  const handleChange = (e) => {
    setContractAddress(e.target.value);
  };

  return (
    <div>
      <select
        name="cryptos"
        id="crypto"
        onChange={handleChange}
      >
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
    </div>
  );
};

export default Graph;
