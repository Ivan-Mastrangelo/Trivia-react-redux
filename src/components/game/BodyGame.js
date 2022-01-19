import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AnswersButtons from './components/AnswersButtons';
import Heading from './components/Heading';

class BodyGame extends Component {
  render() {
    const { loading } = this.props;
    return (
      (!loading && (
        <>
          <Heading />
          {/* <AnswersButtons /> */}
        </>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.game.loading,
});

export default connect(mapStateToProps)(BodyGame);
