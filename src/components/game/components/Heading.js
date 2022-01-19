import React, { Component } from 'react';

class Heading extends Component {
  render() {
    const { getResults } = this.props;
    return (
      <>
        <h1
          data-testid="question-category"
        >
          {getResults[0].category}
        </h1>
        <h5
          data-testid="question-text"
        >
          {getResults[0].question}
        </h5>
      </>
    );
  }
}

export default Heading;
