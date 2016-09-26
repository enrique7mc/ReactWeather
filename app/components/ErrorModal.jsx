import React, { Component, PropTypes } from 'react';

export default class ErrorModal extends Component {
  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal')); // eslint-disable-line no-undef
    modal.open();
  }

  render() {
    const { title, message } = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }
}

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
  title: 'Error'
};
