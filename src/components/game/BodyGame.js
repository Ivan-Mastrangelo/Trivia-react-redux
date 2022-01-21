import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswersButtons from './components/AnswersButtons';
import Heading from './components/Heading';
import Timer from './components/Timer';

class BodyGame extends Component {
  render() {
    const { loading } = this.props;
    return (
      (!loading && (
        <>
          <Heading />
          <AnswersButtons />
          <Timer />
        </>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.game.loading,
});

export default connect(mapStateToProps)(BodyGame);

BodyGame.propTypes = {
  loading: PropTypes.bool.isRequired,
};
