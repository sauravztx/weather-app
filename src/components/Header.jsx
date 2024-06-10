// src/components/Header.jsx
import React from 'react';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <h1>Weather App</h1>
      <button 
        onClick={toggleDarkMode} 
        className={`button ${isDarkMode ? 'button-dark' : 'button-light'}`}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
