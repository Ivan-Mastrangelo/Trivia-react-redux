import React from 'react';
import PropTypes from 'prop-types';

class ButtonSettings extends React.Component {
  render() {
    const { clickBtn } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ clickBtn }
        >
          Settings
        </button>
      </div>
    );
  }
}

ButtonSettings.propTypes = {
  clickBtn: PropTypes.func.isRequired,
};

export default ButtonSettings;
