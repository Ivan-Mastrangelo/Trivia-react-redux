import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextButton extends Component {
  handleClick = () => {
    const { handleClickIndex } = this.props;
    handleClickIndex();
  }

  render() {
    const { statusButton } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        style={ { visibility: statusButton } }
        onClick={ () => this.handleClick() }
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
