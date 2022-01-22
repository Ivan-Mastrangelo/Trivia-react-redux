import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextButton extends Component {
  render() {
    const { statusButton, handleClickIndex } = this.props;
    console.log(index);
    return (
      <button
        type="button"
        data-testid="btn-next"
        style={ { visibility: statusButton } }
        onClick={ () => handleClickIndex() }
      >
        Next
      </button>
    );
  }
}

NextButton.propTypes = {
  statusButton: PropTypes.string.isRequired,
  handleClickIndex: PropTypes.func.isRequired,
};

export default NextButton;
