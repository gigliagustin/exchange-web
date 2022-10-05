import { React } from 'react';
import { currencies } from '../../constants';
import { useQuoteCurrencyContext, useQuoteCurrencyToggleContext } from '../../providers/CurrencyProvider';
import './navbar.scss';

const Navbar = () => {
  const currentCoin = useQuoteCurrencyContext();
  const setCurrentCoin = useQuoteCurrencyToggleContext();
  const handleClick = (e) => { setCurrentCoin(e.target.id); };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex .justify-content-sm-between">
        <a className="navbar-brand" href="#">
          <img src='' width="30" height="24" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentCoin}
              </a>
              <ul className="dropdown-menu">{currencies.map((currency) => <li key={currency.code} onClick={handleClick}>
                <a className="dropdown-item" href="#" id={currency.code}>
                  <b>{currency.country}</b> {currency.code}</a>
              </li>)}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="conversor" href="#">
                Calculadora
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="graphic" href="#">
                Gráficos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="about-us" href="#">
                ¿Quienes somos?
              </a>
            </li>
          </ul>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
