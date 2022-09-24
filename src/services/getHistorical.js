import axios from 'axios';
import { key } from '../constants';

// const date = new Date().now();
// const from = date; // Restar 7 dias;

export const getHistorical = async (
  contractAddress,
  chainId,
  quoteCurrency = 'USD',
) => {
  const response = await axios(
    `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/${chainId}/${quoteCurrency}/${contractAddress}/?quote-currency=${quoteCurrency}&format=JSON&from=2022-09-01&to=2022-09-24&key=${key}`,
  );

  return response;
};
