import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { filterItems } from '../helpers/filterItems';
import { getHistorical } from '../services/getHistorical';

const useHistorical = (contractAdress, chainId) => {
  const [historical, setHistorical] = useState([]);

  const { isLoading, isError } = useQuery(
    ['historical', contractAdress, chainId],
    () => getHistorical(contractAdress, chainId),
    {
      enabled: !!contractAdress && !!chainId,
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
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
