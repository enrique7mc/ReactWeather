import React from 'react';
import Nav from './Nav';

const Main = props => (
  <div>
    <Nav />
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        {props.children}
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node,
};

module.exports = Main;
