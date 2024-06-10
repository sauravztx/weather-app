# Weather Web App

This is a weather web application built using HTML, CSS, JavaScript, and React with Vite. It features a responsive UI, dark mode, location search, weather details, background images that change according to the weather conditions, and animations.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Known Issues and Limitations](#known-issues-and-limitations)
- [Approach](#approach)
- [Contributing](#contributing)


## Features
- Responsive UI
- Dark Mode Feature (affecting the weather card, header, and footer)
- Location search option
- Displays temperature, wind speed, humidity, and pressure
- Changes background image according to the weather conditions
- Displays time and date of the searched location
- Powerful animations (e.g., spinning weather icon)
- Header and footer remain fixed

## Technologies Used
- HTML
- CSS
- JavaScript
- React
- Vite
- Axios

## Getting Started

### Prerequisites
- Node.js (>= 12.x)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/weather-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weather-app
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application
1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and go to `http://localhost:3000` to see the application.

## Live Demo
- https://6665b93974013cdada6be8c5--chimerical-dieffenbachia-019cdb.netlify.app/

## Known Issues and Limitations
- The application currently uses the OpenWeatherMap API, which requires an API key. Ensure you replace `YOUR_API_KEY` with your actual API key in the `App.jsx` file.
- The application may not handle API rate limits gracefully.
- Some weather conditions might not have corresponding background images.
- The UI might need further optimization for different screen sizes.

## Approach
This application follows a component-based architecture using React. The main functionalities include fetching weather data from the OpenWeatherMap API, dynamically updating the UI based on the fetched data, and handling user interactions such as searching for different locations and toggling dark mode.

### Key Components:
- `App.jsx`: The main component managing state and rendering child components.
- `Header.jsx`: Displays the application title and dark mode toggle button.
- `Footer.jsx`: Displays footer content.
- `SearchBar.jsx`: Provides a search input for users to enter a location.
- `WeatherCard.jsx`: Displays weather information for the searched location.

### Styling:
- The application uses CSS for styling with specific classes to handle dark mode styles.
- Background images are dynamically updated based on the current weather conditions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


