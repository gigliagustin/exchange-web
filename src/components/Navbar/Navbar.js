import React from 'react';
import './navbar.scss';

const Navbar = () => {
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
                USD
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <b>AR </b> ARS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>AU </b>AUD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>US </b> USD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>CA </b> CAD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>KR </b>KRW
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>SG </b>SGD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>RU </b>RUB
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>EU </b>EUR
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>JP </b>JPY
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>NG </b>NGN
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>CH </b>CHF
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>GB </b>GBP
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="calculator" href="#">
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
      </div>
    </nav>
  );
};

export default Navbar;
