import React from 'react';
import { IndexLink } from 'react-router';

const Nav = function Nav() {
  return (<div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
    <IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink>
    <IndexLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</IndexLink>
  </div>);
};

module.exports = Nav;
