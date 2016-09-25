import React from 'react';
import ErrorModal from './ErrorModal';
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
    this.setState({ isLoading: true, errorMessage: null });
    OpenWeatherMap.getTemperature(city)
      .then((temp) => {
        this.setState({ city, temp, isLoading: false });
      }, (e) => {
        this.setState({
          isLoading: false,
          errorMessage: e.message
        });
      });
  }

  showMessage() {
    const { isLoading, temp, city } = this.state;
    if (isLoading) {
      return <h3 className="text-center">Fetching weather...</h3>;
    } else if (temp && city) {
      return <WeatherMessage city={city} temperature={temp} />;
    }

    return null;
  }

  showErrorModal() {
    if (this.state.errorMessage) {
      return (<ErrorModal />);
    }

    return null;
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {this.showMessage()}
        {this.showErrorModal()}
      </div>
    );
  }
}


module.exports = Weather;
