// src/components/WeatherCard.jsx
import React from 'react';
import {
  WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog,
} from 'react-icons/wi';
import './WeatherCard.css';

const WeatherCard = ({ weather, isDarkMode }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <WiDaySunny size={64} />;
      case 'Clouds':
        return <WiCloud size={64} />;
      case 'Rain':
        return <WiRain size={64} />;
      case 'Snow':
        return <WiSnow size={64} />;
      case 'Thunderstorm':
        return <WiThunderstorm size={64} />;
      case 'Fog':
      case 'Mist':
      case 'Haze':
        return <WiFog size={64} />;
      default:
        return <WiDaySunny size={64} />;
    }
  };

  return (
    <div className={`weather-card ${isDarkMode ? 'dark' : ''}`}>
      <h2>{weather.location}</h2>
      <p>{weather.date}</p>
      <div className="weather-icon">{getWeatherIcon(weather.condition)}</div>
      <p className="weather-description">{weather.description}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Pressure: {weather.pressure} hPa</p>
    </div>
  );
};

export default WeatherCard;
