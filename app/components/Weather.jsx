import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

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
    this.setState({
      city,
      temp: 23
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
