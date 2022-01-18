import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { gravatarEmail, name, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            data-testid="input-player-name"
            name="name"
            value={ name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="input-gravatar-email"
            name="gravatarEmail"
            value={ gravatarEmail }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Inputs;
