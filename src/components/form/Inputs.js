import React from 'react';

class Inputs extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome:
          <input type="text" data-testid="input-player-name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" data-testid="input-gravatar-email" />
        </label>
      </div>
    );
  }
}

export default Inputs;