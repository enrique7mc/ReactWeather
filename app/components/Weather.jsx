import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'Mexico City',
      temp: 20
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    OpenWeatherMap.getTemperature(city)
      .then((temp) => {
        this.setState({ city, temp });
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage city={this.state.city} temperature={this.state.temp} />
      </div>
    );
  }
}


module.exports = Weather;
