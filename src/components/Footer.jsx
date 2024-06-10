// Footer.jsx
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
      <p>@Weather App - by Saurav.</p>
    </footer>
  );
};

export default Footer;
