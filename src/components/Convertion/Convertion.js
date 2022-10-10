import { useState, useEffect } from 'react';
import useBalances from '../../hooks/useBalances';
import { chains } from '../../constants/index';
import Spinner from '../Spinner/Spinner';
import { Card } from '../Card';

const Convertion = () => {
  const [contractAddress, setContractAddress] = useState('');
  const quoteCurrency = 'USD';
  const handleChange = (e) => {
    setContractAddress(e.target.value);
  };
  const {
    balances, quote, isLoading, isError,
  } = useBalances(
    quoteCurrency,
    contractAddress,
  );
  console.log(balances);
  const [convertion, setConvertion] = useState(quote);
  const onChangeValue = () => {
    const pattern = /^[+]?([.]\d+|\d+[.]?\d*)$/g;
    const { value } = document.getElementById('moneyValue');
    if (pattern.test(value)) {
      const calc = Number(value) * Number(balances?.quote);
      console.log(calc);
      setConvertion(calc);
      return convertion;
    }
  };
  useEffect(() => {
    if (!isLoading) {
      setConvertion(quote);
    }
  }, [isLoading, quote, setConvertion]);

  return (
    <div className='row'>
      <select
        name='cryptos'
        id='crypto'
        className='form-control'
        onChange={handleChange}
      >
        <option>Seleccione una moneda</option>
        {chains.map((item) => (
          <option key={item.chainId} value={item.contractAddress}>
            {item.name}
          </option>
        ))}
      </select>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='col input-group'>
            <label htmlFor='moneyValue' className='input-group-text'>
              Select a value
            </label>
            <input
              type='number'
              onBlur={onChangeValue}
              id='moneyValue'
              min={0}
              defaultValue={1}
              className='form-control'
            />
          </div>
          <div className='col'>
            <Card balances={balances} convertion={convertion}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Convertion;
