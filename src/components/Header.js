import classNames from 'classnames';
import React from 'react';
import { useThemeContext, useThemeToggleContext } from '../providers/ThemeProvider';

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();

  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  console.log(theme);
  return (
    <div>
      <nav className={classNames('navbar navbar-light', {
        'bg-light': theme === 'light',
        'bg-dark': theme === 'dark',
      })}>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleChange}>
          </input>
        </div>
      </nav>
    </div>
  );
};

export default Header;
