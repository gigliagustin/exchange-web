import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { filterItems } from '../helpers/filterItems';
import { getHistorical } from '../services/getHistorical';

const useHistorical = (
  contractAdress,
  chainId,
  currentCoin,
) => {
  const [historical, setHistorical] = useState([]);
  console.log(currentCoin);

  const { isLoading, isError } = useQuery(
    ['historical', contractAdress, chainId, currentCoin],
    () => getHistorical(contractAdress, chainId, currentCoin),
    {
      enabled: !!contractAdress && !!chainId && !!currentCoin,
      refetchOnWindowFocus: false,
      select(response) {
        return filterItems(response);
      },
      onSettled(data) {
        if (data) setHistorical(data);
      },
    },
  );

  return {
    historical,
    isLoading,
    isError,
  };
};

export default useHistorical;
