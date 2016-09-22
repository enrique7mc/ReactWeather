import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const city = this.cityInput.value;
    if (city.length > 0) {
      this.cityInput.value = '';
      this.props.onSearch(city);
    }
  }
  render() {
    return (
      <div>
        <h1>Get Weather</h1>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref={c => (this.cityInput = c)} placeholder="Enter your city" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

WeatherForm.propTypes = {
  onSearch: React.PropTypes.func.isRequired
};
