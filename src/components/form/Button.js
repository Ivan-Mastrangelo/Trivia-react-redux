import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button type="button" data-testid="btn-play">Play</button>
      </div>
    );
  }
}

export default Button;