import React from 'react';
import './card.scss';

const Card = ({ balances, convertion }) => {
  return (
    <div>
        <img src={balances?.logo_url} alt={balances?.contract_name} className='card-img-top img-size'/>
        <div className='card-body border'>
            <p className='card-text'>La moneda es: {convertion}</p>
        </div>
    </div>
  );
};

export default Card;
