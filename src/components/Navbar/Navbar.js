import { React, useState } from 'react';
import { currencies } from '../../constants';
import './navbar.scss';

const Navbar = () => {
  const [currentCoin, setCurrentCoin] = useState('USD');
  const [currentCountry, setCurrentCountry] = useState('US');

  const handleClick = (e) => {
    setCurrentCoin(e.target.text);
    setCurrentCountry(e.target.id);
  };

  const urlFlag = `https://www.countryflagicons.com/SHINY/16/${currentCountry}.png`;

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
                <img src={urlFlag} alt='' />
                {currentCoin}
              </a>
              <ul className="dropdown-menu">
              <div className='gridTitle'> Seleccione una moneda</div>
                {currencies.map((currency) => <li key={currency.code}>
                <a className="dropdown-item" href="#" onClick={handleClick} id={currency.country}>{currency.code}</a>
              </li>)}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="conversor" href="#">
                Calculadora
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="graph" href="#">
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
