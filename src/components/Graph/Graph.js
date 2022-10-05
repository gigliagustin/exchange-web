import React, { useState } from 'react';
import {
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { chains } from '../../constants';
import useHistorical from '../../hooks/useHistorical';
import BlankSlate from '../BlankSlate/BlankSlate';

const Graph = () => {
  const [contractAddress, setContractAddress] = useState();
  const chainsId = chains.filter(chain => chain.contractAddress === contractAddress);
  const chainId = chainsId[0]?.chainId;
  const { historical, isError, isLoading } = useHistorical(contractAddress, chainId);

  const handleChange = (e) => {
    setContractAddress(e.target.value);
  };

  return (
    <div id='graphic' className='container-fluid'>
      <select
        name="cryptos"
        id="crypto"
        onChange={handleChange}
      >
        <option>Seleccione una Moneda</option>
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
      {
        isLoading || isError
          ? <BlankSlate isLoading={isLoading}/>
          : <div className='container-fluid mt-3'>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={historical} width={320} height={320} margin={{
                  left: -15, right: 10,
                }}
                >
                  <XAxis dataKey="date" angle={-10} />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#a12829" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
      }
    </div>
  );
};

export default Graph;
