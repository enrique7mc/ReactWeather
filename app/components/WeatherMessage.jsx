import React from 'react';

const WeatherMessage = ({ city, temperature }) => (
  <div>
    <p>{city}</p>
    <p>{temperature}°</p>
  </div>
);

WeatherMessage.propTypes = {
  city: React.PropTypes.string.isRequired,
  temperature: React.PropTypes.number.isRequired
};

module.exports = WeatherMessage;
