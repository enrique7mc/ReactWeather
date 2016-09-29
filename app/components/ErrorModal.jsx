import React, { Component, PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';

export default class ErrorModal extends Component {
  componentDidMount() {
    const { title, message } = this.props;
    const modalMarkup = (
      <div
        id="error-modal"
        className="reveal tiny text-center"
        data-reveal=""
        ref={node => (this.node = node)}
      >
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );

    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(this.node).html($modal);
    const modal = new Foundation.Reveal($('#error-modal')); // eslint-disable-line no-undef
    modal.open();
  }

  render() {
    return (
      <div ref={node => (this.node = node)} />
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
