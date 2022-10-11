import React from 'react';
import currency from 'currency.js';
import './convertionInput.scss';

const ConvertionInput = ({ balances, convertion, quoteCurrency }) => {
  const formattedValue = currency(convertion, { separator: ',', precision: 2 }).format();
  return (
    <>
    <p>{`El valor de la cripto es equivalente a ${quoteCurrency} `}</p>
      <div
      className="input-group">
          <span className="input-group-text"> <img className='img-size' src={balances?.logo_url} alt={balances?.contract_name} /></span>
          <input type="text" className="form-control" disabled readOnly value={formattedValue || ''}/>
      </div>
    </>
  );
};

export default ConvertionInput;
