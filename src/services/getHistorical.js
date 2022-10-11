import axios from 'axios';
import { key } from '../constants';

/* istanbul ignore next */
const date = new Date();

/* istanbul ignore next */
const fromDate = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().split('T')[0];
/* istanbul ignore next */
const toDate = date.toISOString().split('T')[0];

/* istanbul ignore next */
export const getHistorical = async (
  contractAddress,
  chainId,
  quoteCurrency = 'USD',
) => {
  const response = await axios(
    `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/${chainId}/${quoteCurrency}/${contractAddress}/?quote-currency=${quoteCurrency}&format=JSON&from=${fromDate}&to=${toDate}&key=${key}`,
  );

  return response;
};
