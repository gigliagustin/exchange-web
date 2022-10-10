import { useState, useEffect } from 'react';
import useBalances from '../../hooks/useBalances';
import { chains } from '../../constants/index';
// import filterBalances from '../../helpers/filterBalances';

const Convertion = () => {
  const [contractAddress, setContractAddress] = useState('');
  const quoteCurrency = 'USD';
  const handleChange = (e) => {
    setContractAddress(e.target.value);
  };
  const { balances, isLoading, isError } = useBalances(quoteCurrency, contractAddress);

 // const uniqueBalance = filterBalances(contractAddress, balances);
/*   console.log(`El valor actual es: ${JSON.stringify(uniqueBalance)}`);
  const [convertion, setConvertion] = useState(uniqueBalance?.quote);
  console.log(convertion);
  const onChangeValue = () => {
    const { value } = document.getElementById('moneyValue');
    if (Number(value) === 0 || Number(value) === '0') {
      return console.error('Putete');
    } else {
      const calc = Number(value) * Number(uniqueBalance?.quote);
      setConvertion(calc);
      return convertion;
    }
  };
  useEffect(() => {
    onChangeValue();
  }, [convertion]); */
  return (
    <div>
       { isLoading
         ? <p>
        Loading...
      </p>
         : <select
        name="cryptos"
        id="crypto"
        onChange={handleChange}
      >
        <option>Seleccione una moneda</option>
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
}

  <p>
  La moneda es: { /* convertion */}
  </p>
  <label htmlFor="">Select a value</label>
  <input type="text" /* onBlur={onChangeValue} */id="moneyValue"/>
</div>
  );
};

export default Convertion;
