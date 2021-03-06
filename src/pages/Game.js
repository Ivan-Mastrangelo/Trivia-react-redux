import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApiGame } from '../actions';
import BodyGame from '../components/game/BodyGame';
import Header from '../components/game/Header';

class Game extends Component {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        {!loading && (
          <>
            <Header />
            <BodyGame />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.game.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () => dispatch(requestApiGame()),
});

Game.propTypes = {
  loading: PropTypes.bool.isRequired,
  getQuestions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

Game.propTypes = {
  loading: PropTypes.bool.isRequired,
  getQuestions: PropTypes.func.isRequired,
};
