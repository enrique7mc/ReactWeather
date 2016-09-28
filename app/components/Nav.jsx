import React from 'react';
import { IndexLink } from 'react-router';

class Nav extends React.Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    const city = this.cityInput.value;
    const encodedCity = encodeURIComponent(city);
    if (city) {
      this.cityInput.value = '';
      window.location.hash = `#/?location=${encodedCity}`;
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink>
            </li>
            <li>
              <IndexLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input
                  type="search"
                  ref={c => (this.cityInput = c)}
                  placeholder="Enter your city"
                />
              </li>
              <li>
                <input type="submit" className="button" value="Get weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Nav;
