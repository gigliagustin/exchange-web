import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBalances } from '../services/getBalances';
import { filterBalances } from '../helpers/filterBalances';

/* istanbul ignore next */
const useBalances = (quoteCurrency, contractAddress) => {
  const [balances, setBalances] = useState();
  const [quote, setQuote] = useState();
  const { isLoading, isError } = useQuery(
    ['balances', quoteCurrency, contractAddress],
    () => getBalances(quoteCurrency),
    {
      enabled: !!contractAddress && !!quoteCurrency,
      refetchOnWindowFocus: false,
      select(response) {
        return filterBalances(contractAddress, response);
      },
      onSettled(data) {
        if (data) {
          setBalances(data);
          setQuote(data.quote);
        }
      },
    },
  );
  return {
    balances,
    quote,
    isLoading,
    isError,
  };
};

export default useBalances;
