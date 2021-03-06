import React from 'react';
import { Link } from 'react-router';

const Examples = () => (
  <div>
    <h1 className="page-title text-center">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li><Link to="/?location=Mexico%20city">Mexico City</Link></li>
      <li><Link to="/?location=Philadelphia">Philadelphia, PA</Link></li>
      <li><Link to="/?location=Rio">Rio, Brazil</Link></li>
    </ol>
  </div>
);

module.exports = Examples;
