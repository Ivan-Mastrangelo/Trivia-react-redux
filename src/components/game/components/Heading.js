import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Heading extends Component {
  render() {
    const { getResults, getIndex } = this.props;
    return (
      getResults.length > 0 && (
        <div>
          <h1
            data-testid="question-category"
          >
            {getResults[getIndex].category}
          </h1>
          <h5
            data-testid="question-text"
          >
            {getResults[getIndex].question}
          </h5>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  getResults: state.game.results,
  getIndex: state.game.index,
});

Heading.propTypes = {
  getResults: PropTypes.arrayOf(PropTypes.any).isRequired,
  getIndex: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Heading);
