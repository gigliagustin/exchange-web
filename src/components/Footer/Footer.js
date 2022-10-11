import React from 'react';
import classNames from 'classnames';
import { useThemeContext } from '../../providers/ThemeProvider';

const Footer = () => {
  const theme = useThemeContext();

  return (
    <div className={classNames('container-fluid', {
      'text-black': theme === 'light',
      'text-white': theme === 'dark',
    })}>
      <p className='fs-6 p-2 mt-5 text-center'>Exchange Web © A1-React Advanced, 2022. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
