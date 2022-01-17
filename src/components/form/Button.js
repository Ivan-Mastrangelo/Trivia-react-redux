import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { isDisable, clickBtn } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ isDisable }
          onClick={ clickBtn }
        >
          Play
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  isDisable: PropTypes.bool.isRequired,
  clickBtn: PropTypes.func.isRequired,
};

export default Button;
