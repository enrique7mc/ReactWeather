import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    this.setState({ isLoading: true });
    OpenWeatherMap.getTemperature(city)
      .then((temp) => {
        this.setState({ city, temp, isLoading: false });
      }, (error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }

  showMessage() {
    const { isLoading, temp, city } = this.state;
    if (isLoading) {
      return <h3>Fetching weather...</h3>;
    } else if (temp && city) {
      return <WeatherMessage city={city} temperature={temp} />;
    }

    return null;
  }

  render() {
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        {this.showMessage()}
      </div>
    );
  }
}


module.exports = Weather;
