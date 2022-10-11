import { useState, useEffect } from 'react';
import useBalances from '../../hooks/useBalances';
import BlankSlate from '../BlankSlate/BlankSlate';
import Spinner from '../Spinner/Spinner';
import { Card } from '../Card';

const Convertion = ({ quoteCurrency, contractAddress }) => {
  const {
    balances, quote, isLoading, isError,
  } = useBalances(
    quoteCurrency,
    contractAddress,
  );
  const [convertion, setConvertion] = useState(quote);
  const onChangeValue = () => {
    const pattern = /^[+]?([.]\d+|\d+[.]?\d*)$/g;
    const { value } = document.getElementById('moneyValue');
    if (pattern.test(value)) {
      const calc = Number(value) * Number(balances?.quote);
      setConvertion(calc);
      return convertion;
    }
  };
  useEffect(() => {
    if (!isLoading) {
      setConvertion(quote);
    }
  }, [isLoading, quote, setConvertion]);

  if (isLoading || isError) {
    if (balances === undefined) {
      return (
        <>
          <BlankSlate />
          <div className='container d-flex justify-content-center mt-5'>
            <Spinner />
          </div>
        </>
      );
    }
    return (
      <div className='container d-flex justify-content-center mt-5'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='row'>
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
          <Card balances={balances} convertion={convertion} />
        </div>
    </div>
  );
};

export default Convertion;
