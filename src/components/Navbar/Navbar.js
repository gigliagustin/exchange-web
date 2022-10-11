import classNames from 'classnames';
import { React, useState } from 'react';
import { chains, currencies } from '../../constants';
import {
  useChainCurrencyContext,
  useChainCurrencyToggleContext,
} from '../../providers/ChainProvider';
import {
  useQuoteCurrencyContext,
  useQuoteCurrencyToggleContext,
} from '../../providers/CurrencyProvider';
import { useThemeContext, useThemeToggleContext } from '../../providers/ThemeProvider';
import './navbar.scss';

const Navbar = () => {
  const [currentCountry, setCurrentCountry] = useState('US');
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();
  const urlFlag = `https://www.countryflagicons.com/SHINY/16/${currentCountry}.png`;

  const currentCoin = useQuoteCurrencyContext();
  const setCurrentCoin = useQuoteCurrencyToggleContext();
  const handleClick = (e) => {
    setCurrentCoin(e.target.text);
    setCurrentCountry(e.target.id);
  };

  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const chainValue = useChainCurrencyContext();
  const setChainValue = useChainCurrencyToggleContext();
  const handleChainClick = (e) => {
    const duplicatedChain = chains;
    const filteredChain = duplicatedChain.find(
      (chain) => chain.contractAddress === e.target.id,
    );
    setChainValue({
      name: filteredChain.name,
      chainId: filteredChain.chainId,
      contractAddress: filteredChain,
    });
  };
  return (
    <nav className={classNames('navbar navbar-expand-lg bg-light', {
      'bg-light': theme === 'light',
      'bg-dark': theme === 'dark',
    })}>
      <div className="container-fluid d-flex .justify-content-sm-between">
        <a className="navbar-brand" href="#">
          <img src='' width="30" height="24" />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon text-white'></span>
        </button>
        <div
          className='collapse navbar-collapse flex-grow-0'
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <a
                className={classNames('nav-link dropdown-toggle', {
                  'text-black': theme === 'light',
                  'text-white': theme === 'dark',
                })}
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {chainValue?.name}
              </a>
              <ul className={classNames('dropdown-menu', {
                'bg-light': theme === 'light',
                'bg-dark': theme === 'dark',
              })}>
                <div className='gridTitle'> Seleccione una moneda</div>
                {chains.map((chain) => (
                  <li key={chain.chainId}>
                    <a
                      className={classNames('dropdown-item', {
                        'text-black': theme === 'light',
                        'text-white': theme === 'dark',
                      })}
                      href='#'
                      onClick={handleChainClick}
                      id={chain.contractAddress}
                    >
                      {chain.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className={classNames('nav-link dropdown-toggle', {
                  'text-black': theme === 'light',
                  'text-white': theme === 'dark',
                })}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-testid="a-element"
              >
              <img src={urlFlag} alt='' />
                {currentCoin}
              </a>
              <ul className={classNames('dropdown-menu', {
                'bg-light': theme === 'light',
                'bg-dark': theme === 'dark',
              })}>
                <div className='gridTitle'> Seleccione una moneda</div>
                {currencies.map((currency) => <li key={currency.code}>
                  <a className={classNames('dropdown-item', {
                    'text-black': theme === 'light',
                    'text-white': theme === 'dark',
                  })} href="#" onClick={handleClick} id={currency.country}>{currency.code}</a>
                </li>)}
              </ul>
            </li>
            <li className="nav-item">
              <a className={classNames('nav-link', {
                'text-black': theme === 'light',
                'text-white': theme === 'dark',
              })} id="conversor" href="#">
                Calculadora
              </a>
            </li>
            <li className="nav-item">
              <a className={classNames('nav-link', {
                'text-black': theme === 'light',
                'text-white': theme === 'dark',
              })} id="graph" href="#">
                Gráficos
              </a>
            </li>
            <li className="nav-item">
              <a className={classNames('nav-link', {
                'text-black': theme === 'light',
                'text-white': theme === 'dark',
              })} id="about-us" href="#">
                ¿Quienes somos?
              </a>
            </li>
            <li className='nav-item form-check form-switch'>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleChange}>
              </input>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
