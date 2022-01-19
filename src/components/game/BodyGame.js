import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswersButtons from './components/AnswersButtons';
import Heading from './components/Heading';

class BodyGame extends Component {
  render() {
    const { getResults, loading } = this.props;
    console.log(getResults);
    return (
      (!loading && (
        <>
          <Heading getResults={ getResults } />
          <AnswersButtons getResults={ getResults } />
        </>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  getResults: state.game.results,
  loading: state.game.results,
});

export default connect(mapStateToProps)(BodyGame);
