import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextButton extends Component {
  render() {
    const { statusButton } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        style={ { visibility: statusButton } }
      >
        Next
      </button>
    );
  }
}

NextButton.propTypes = {
  statusButton: PropTypes.string.isRequired,
};

export default NextButton;
