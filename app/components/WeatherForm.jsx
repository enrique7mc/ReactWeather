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
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref={c => (this.cityInput = c)} placeholder="Enter your city" />
          <button className="button hollow expanded">Get Weather</button>
        </form>
      </div>
    );
  }
}

WeatherForm.propTypes = {
  onSearch: React.PropTypes.func.isRequired
};
