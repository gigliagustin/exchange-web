import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBalances } from '../services/getBalances';
import { filterBalances } from '../helpers/filterBalances';

const useBalances = (quoteCurrency, contractAddress) => {
  const [balances, setBalances] = useState();

  const { isLoading, isError } = useQuery(
    ['balances', contractAddress],
    () => getBalances(quoteCurrency),
    {
      refetchOnWindowFocus: false,
      select(response) {
        return filterBalances(contractAddress, response);
      },
      onSettled(data) {
        console.log('Los datos son', data);
        if (data) setBalances(data);
      },
    },
  );
  return {
    balances,
    isLoading,
    isError,
  };
};

export default useBalances;
