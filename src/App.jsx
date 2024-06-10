// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import useDarkMode from './hooks/useDarkMode';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [backgroundImage, setBackgroundImage] = useState('default.jpg');

  const fetchWeather = async (query) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=55a13bb3a7b5e809235d6a9a475ae6bc&units=metric`);
      const data = response.data;
      setWeather({
        location: data.name,
        date: new Date().toLocaleString(),
        temperature: data.main.temp,
        windSpeed: data.wind.speed,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
      });
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    // Fetch weather for Noida, India when the component mounts
    fetchWeather('Noida, India');
  }, []);

  useEffect(() => {
    if (weather) {
      switch (weather.condition) {
        case 'Clear':
          setBackgroundImage('clear.jpg');
          break;
        case 'Clouds':
          setBackgroundImage('clouds.png');
          break;
        case 'Rain':
          setBackgroundImage('rain.png');
          break;
        // Add more conditions as needed
        default:
          setBackgroundImage('default.jpg');
      }
    }
  }, [weather]);

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`} style={{ backgroundImage: `url(/src/assets/${backgroundImage})` }}>
      <Header toggleDarkMode={() => toggleDarkMode(prevMode => !prevMode)} isDarkMode={isDarkMode} />
      <main className="main-content">
        <SearchBar onSearch={fetchWeather} />
        {weather && <WeatherCard weather={weather} isDarkMode={isDarkMode} />}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
