import React, { Component } from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);
