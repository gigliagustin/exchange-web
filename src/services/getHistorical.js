import axios from 'axios';
import { key } from '../constants';

const today = new Date();
const toDate = today.toISOString().split('T')[0];

const lastDate = new Date(today.setDate(today.getDay() - 1));
const fromDate = lastDate.toISOString().split('T')[0];

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
