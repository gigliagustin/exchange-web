import imageAgus from '../assets/images/ag.jpg';
import imageMaciel from '../assets/images/mc.jpg';
import imageDante from '../assets/images/ds.jpg';
import imageJuan from '../assets/images/jic.jpg';

export const URL_BASE = 'https://api.covalenthq.com/v1';
export const CHAIN_ID = '1';
export const CONTEXT = 'address/demo.eth/balances_v2';
export const key = 'ckey_f2ff6bb113f042749c63d1b7e2f';
export const address = 'demo.eth';
export const chains = [
  {
    name: 'Ether',
    chainId: 1,
    contractAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  },
  {
    name: 'BNB',
    chainId: 56,
    contractAddress: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
  },
];
export const currencies = [
  {
    code: 'ARS',
    country: 'AR',
    name: 'Peso Argentino',

  },
  {
    code: 'USD',
    country: 'US',
    name: 'Dolar Americano',

  },
  {
    code: 'CAD',
    country: 'CA',
    name: 'Dolar Canadiense',

  },
  {
    code: 'AUD',
    country: 'AU',
    name: 'Dolar Australiano',

  },
  {
    code: 'KRW',
    country: 'KR',
    name: 'Won Surcoreano',

  },
  {
    code: 'SGD',
    country: 'SG',
    name: 'Dolar de Singapur',

  },
  {
    code: 'RUB',
    country: 'RU',
    name: 'Rublo Ruso',

  },
  {
    code: 'JPY',
    country: 'JP',
    name: 'Yen Japonés',

  },
  {
    code: 'EUR',
    country: 'EU',
    name: 'Euro',

  },
  {
    code: 'NGN',
    country: 'NG',
    name: 'Naira',

  },
  {
    code: 'CHF',
    country: 'CH',
    name: 'Franco Suizo',

  },
  {
    code: 'GBP',
    country: 'GB',
    name: 'Libra Esterlina',

  },
];
export const TeamMembers = [
  {
    id: 1,

    name: 'Maciel Castro',
    role: 'Scrum Master',
    image: imageMaciel,
  },
  {
    id: 2,
    name: 'Agustín Gigli',
    role: 'Team Leader',
    image: imageAgus,
  },
  {
    id: 3,
    name: 'Juan I. Cansillieri',
    role: 'Dev',
    image: imageJuan,
  },
  {
    id: 4,
    name: 'Dante Sarmiento',
    role: 'Dev',
    image: imageDante,
  },
];
