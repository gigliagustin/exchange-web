import useBalances from '../../hooks/useBalances';

const Convertion = () => {
  const quoteCurrency = 'ARS';
  const { balances, isLoading, isError } = useBalances(quoteCurrency);
  console.log(balances);
  const arrBal = balances?.items;
  console.log(arrBal?.find(balance => balance.contract_address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'));
  return (
    <>
    <p>{arrBal?.quote}</p>
    </>
  );
};

export default Convertion;
