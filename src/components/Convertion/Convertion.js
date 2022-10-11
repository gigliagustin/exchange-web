/* istanbul ignore file */
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import useBalances from '../../hooks/useBalances';
import BlankSlate from '../BlankSlate/BlankSlate';
import Spinner from '../Spinner/Spinner';
import { ConvertionInput } from '../ConvertionInput';
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
        <BlankSlate />
      );
    }
    return (
      <div className='container d-flex justify-content-center py-5 my-5'>
        <Spinner theme={theme}/>
      </div>
    );
  }

  return (
      <div className='row py-3'>
        <h3 className={classNames('col-12 pb-2 mb-4 text-center', {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
        })}>Conversor de divisas</h3>
        <div className={classNames('col-12 col-lg-6', {
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
        <div className={classNames('col-12 col-lg-6 mt-4 m-lg-0', {
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
