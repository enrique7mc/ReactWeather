import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const city = this.cityInput.value;
    console.log(city);
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
