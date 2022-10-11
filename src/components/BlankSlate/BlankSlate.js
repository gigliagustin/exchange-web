import classNames from 'classnames';
import React from 'react';
import cryptos from '../../assets/cryptos.png';
import { useThemeContext } from '../../providers/ThemeProvider';

const BlankSlate = () => {
  const theme = useThemeContext();
  return (
    <div
    className={classNames('container d-flex flex-column align-items-center justify-content-center border rounded-2 py-5 mt-3', {
      'bg-light': theme === 'light',
      'bg-dark': theme === 'dark',
    })}>
      <img
        src={cryptos}
        alt='Cryptos image'
        className='w-25'
      />
      <h2
      className={classNames('text-center my-0', {
        'text-black': theme === 'light',
        'text-white': theme === 'dark',
      })}
      >Please, to continue choose a currency...</h2>
    </div>
  );
};

export default BlankSlate;
