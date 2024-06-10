// src/components/ToggleSwitch.jsx
import React from 'react';

const ToggleSwitch = ({ toggleDarkMode }) => (
  <div className="toggle-switch">
    <label>
      Dark Mode
      <input type="checkbox" onChange={toggleDarkMode} />
      <span className="slider round"></span>
    </label>
  </div>
);

export default ToggleSwitch;
