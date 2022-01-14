import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { isDisable } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ isDisable }
        >
          Play
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  isDisable: PropTypes.bool.isRequired,
};

export default Button;
