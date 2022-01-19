import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyGame from '../components/game/BodyGame';
import Header from '../components/game/Header';

class Game extends Component {
  render() {
    const { getResults, loading } = this.props;
    console.log(getResults);
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

export default connect(mapStateToProps)(Game);
