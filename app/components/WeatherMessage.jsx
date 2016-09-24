import React from 'react';

const WeatherMessage = ({ city, temperature }) => (
  <div>
    <h3 className="text-center">It's it {temperature}° in {city}.</h3>
  </div>
);

WeatherMessage.propTypes = {
  city: React.PropTypes.string.isRequired,
  temperature: React.PropTypes.number.isRequired
};

module.exports = WeatherMessage;
