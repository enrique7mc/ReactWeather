import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const Weather = function Weather() {
  return (
    <div>
      <WeatherForm />
      <WeatherMessage />
    </div>
  );
};

module.exports = Weather;
