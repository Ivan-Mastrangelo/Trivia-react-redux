import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswersButtons from './components/AnswersButtons';
import Heading from './components/Heading';
import Timer from './components/Timer';
import { newScore } from '../../actions';

class BodyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 30,
      points: 0,
    };
  }

  componentDidMount() {
    const { getName, getEmail } = this.props;
    const url = `https://www.gravatar.com/avatar/${md5(getEmail).toString()}`;
    const obj = {
      name: getName,
      score: 0,
      picture: url,
    };
    localStorage.setItem('raking', JSON.stringify([obj]));
  }

  playCounter = () => {
    const interval = 1000;
    this.inCount = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }, interval);
  }

  limparIntervalo = () => {
    clearInterval(this.inCount);
  };

  acertouMizeravi = (difficulty) => {
    const { getName, getEmail, scoreUpdate } = this.props;
    const tres = 3;
    const dez = 10;
    let diffQuotient = 1;
    if (difficulty === 'hard') {
      diffQuotient = tres;
    } else if (difficulty === 'medium') {
      diffQuotient = 2;
    }
    const { counter, points } = this.state;
    const sumPoints = points + (dez + (counter * diffQuotient));
    this.setState({
      points: sumPoints,
    });
    console.log(sumPoints);
    console.log('teste');
    const url = `https://www.gravatar.com/avatar/${md5(getEmail).toString()}`;
    const obj = {
      name: getName,
      score: sumPoints,
      picture: url,
    };
    localStorage.setItem('raking', JSON.stringify([obj]));
    scoreUpdate(sumPoints);
  }

  render() {
    const { loading } = this.props;
    const { counter } = this.state;
    return (
      (!loading && (
        <>
          <Heading />
          <AnswersButtons
            acertouMizeravi={ this.acertouMizeravi }
            limparIntervalo={ this.limparIntervalo }
          />
          <Timer
            counter={ counter }
            limparIntervalo={ this.limparIntervalo }
            playCounter={ this.playCounter }
          />
        </>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.game.loading,
  getEmail: state.player.gravatarEmail,
  getName: state.player.name,
});

const mapDispatchToProps = (dispatch) => ({
  scoreUpdate: (data) => dispatch(newScore(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyGame);

BodyGame.propTypes = {
  loading: PropTypes.bool.isRequired,
  getEmail: PropTypes.string.isRequired,
  getName: PropTypes.string.isRequired,
  scoreUpdate: PropTypes.func.isRequired,
};
