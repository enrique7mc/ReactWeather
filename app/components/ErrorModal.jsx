import React, { Component } from 'react';

export default class ErrorModal extends Component {
  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal')); // eslint-disable-line no-undef
    modal.open();
  }
  render() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Some Title</h4>
        <p>Our error message</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }
}
