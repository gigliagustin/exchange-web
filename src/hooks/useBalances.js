import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBalances } from '../services/getBalances';

const useBalances = (chainId, quoteCurrency) => {
  const [balances, setBalances] = useState();

  const { isLoading, isError } = useQuery(
    ['balances'],
    () => getBalances(),
    {
      onSettled(data) {
        if (data) setBalances(data.data.data);
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
