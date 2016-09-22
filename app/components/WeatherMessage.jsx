import React from 'react';

const WeatherMessage = props => (
  <div>
    <p>{props.city}</p>
    <p>{props.temperature}°</p>
  </div>
);

WeatherMessage.propTypes = {
  city: React.PropTypes.string.isRequired,
  temperature: React.PropTypes.number.isRequired
};

module.exports = WeatherMessage;
