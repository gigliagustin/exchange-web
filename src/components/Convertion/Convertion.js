import { useState, useEffect } from 'react';
import classNames from 'classnames';
import useBalances from '../../hooks/useBalances';
import BlankSlate from '../BlankSlate/BlankSlate';
import Spinner from '../Spinner/Spinner';
import ConvertionInput from '../ConvertionInput/ConvertionInput';
import { useThemeContext } from '../../providers/ThemeProvider';

const Convertion = ({ quoteCurrency, contractAddress }) => {
  const theme = useThemeContext();
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
    <div className='row py-3'>
          <div className={classNames('col', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>
          <p>Ingresa la cantidad de criptos que deseas convertir</p>

        <div className='input-group'>
          <label htmlFor='moneyValue' className='input-group-text'>
            Ingresa un valor
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
        </div>
        <div className={classNames('col', {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
        })}>
          <ConvertionInput
          balances={balances}
          convertion={convertion}
          quoteCurrency={quoteCurrency} />
        </div>
    </div>
  );
};

export default Convertion;
