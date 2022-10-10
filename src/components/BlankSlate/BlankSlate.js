import React from 'react';
import cryptos from '../../assets/cryptos.png';

const BlankSlate = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center border rounded-2 py-5 mt-3'>
      <img
        src={cryptos}
        alt='Cryptos image'
        className='w-75'
      />
      <h2 className='text-center my-0'>Please, to continue choose a currency...</h2>
    </div>
  );
};

export default BlankSlate;
