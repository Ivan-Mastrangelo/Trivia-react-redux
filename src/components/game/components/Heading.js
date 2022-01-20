import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Heading extends Component {
  render() {
    const { getResults } = this.props;
    return (
      getResults.length > 0 && (
        <div>
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
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  getResults: state.game.results,
});

export default connect(mapStateToProps)(Heading);

Heading.propTypes = {
  getResults: PropTypes.arrayOf(PropTypes.any).isRequired,
};
