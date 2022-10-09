import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBalances } from '../services/getBalances';

const useBalances = (quoteCurrency) => {
  const [balances, setBalances] = useState();

  const { isLoading, isError } = useQuery(
    ['balances'],
    () => getBalances(quoteCurrency),
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
