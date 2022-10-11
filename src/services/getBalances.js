import axios from 'axios';
import { URL_BASE, key, address } from '../constants/index';

export const getBalances = async (quoteCurrency = 'USD') => {
  const response = await axios(
    `${URL_BASE}/1/address/${address}/balances_v2/?quote-currency=${quoteCurrency}&key=${key} `,
  );

  return response;
};
