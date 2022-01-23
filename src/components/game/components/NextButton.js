import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class NextButton extends Component {
  handleClick = () => {
    const { handleClickIndex } = this.props;
    handleClickIndex();
  }

  render() {
    const { statusButton, index } = this.props;
    const MAGIC_NUMBER = 4;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-next"
          style={ { visibility: statusButton } }
          onClick={ () => this.handleClick() }
        >
          Next
        </button>
        {
          index > MAGIC_NUMBER && <Redirect to="/feedback" />
        }
      </div>
    );
  }
}

NextButton.propTypes = {
  statusButton: PropTypes.string.isRequired,
  handleClickIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default NextButton;
