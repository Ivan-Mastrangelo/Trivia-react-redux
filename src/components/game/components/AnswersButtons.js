import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NextButton from './NextButton';
import { actionIndex } from '../../../actions';

class AnswersButtons extends Component {
  constructor() {
    super();
    this.state = {
      arrayAnswers: [],
      buttonCorrectAnswer: '',
      buttonIncorrectAnswer: '',
      difficulty: '',
      statusButton: 'hidden',
      index: 0,
    };
  }

  componentDidMount() {
    const { index } = this.state;
    this.aleatoryAnswers(index);
  }

  setColorsOnClick = ({ target }) => {
    const { acertouMizeravi, limparIntervalo } = this.props;
    const { difficulty } = this.state;
    this.setState({
      buttonCorrectAnswer: '3px solid rgb(6, 240, 15)',
      buttonIncorrectAnswer: '3px solid rgb(255, 0, 0)',
    });
    if (target.value === 'correct') {
      acertouMizeravi(difficulty);
    }
    limparIntervalo();
    this.setState({
      statusButton: 'visible',
    });
  }

  handleClickIndex = () => {
    const { index } = this.state;
    const { getIndex } = this.props;
    this.setState(({
      index: index + 1,
    }), () => {
      const { index: indexQuestion } = this.state;
      this.aleatoryAnswers(indexQuestion);
      getIndex(indexQuestion);
    });
  }

  aleatoryAnswers(index) {
    const { getResults } = this.props;
    const MAGIC_NUMBER = 5;
    if (getResults.length > 0 && index < MAGIC_NUMBER) {
      const { difficulty } = getResults[index];
      console.log(difficulty);
      // const difficulty = getResults[0].difficulty;
      this.setState({
        difficulty,
      });
      const correctAnswer = getResults[index].correct_answer;
      const arrayIncorrectAnswers = getResults[index].incorrect_answers;
      // const correct_answer mudada para getCorrectAnswer por n estar em CamelCase
      const getCorrectAnswers = { correctAnswer };
      // parametro inccorectAnswers mudado para answersWron(responstas erradas) por estadar declarado na const
      const incorrectAnswers = arrayIncorrectAnswers.map((answersWrong) => ({
        incorrectAnswers: answersWrong,
      }));
      // https://flaviocopes.com/how-to-shuffle-array-javascript/
      const arrWithAnswers = [getCorrectAnswers, ...incorrectAnswers];
      const magicNumber = 0.5;
      const newArrAleatory = arrWithAnswers.sort(() => Math.random() - magicNumber);
      this.setState({
        arrayAnswers: newArrAleatory,
      });
    }
  }

  render() {
    const { buttonCorrectAnswer,
      buttonIncorrectAnswer,
      arrayAnswers,
      statusButton,
      index,
    } = this.state;
    const { onOffBtn } = this.props;
    return (
      <>
        <div
          data-testid="answer-options"
        >
          {arrayAnswers.map(({ correctAnswer, incorrectAnswers }, indexQuestion) => {
            if (correctAnswer) {
              return (
                <button
                  key={ correctAnswer }
                  type="button"
                  value="correct"
                  data-testid="correct-answer"
                  onClick={ this.setColorsOnClick }
                  style={ { border: buttonCorrectAnswer } }
                  disabled={ onOffBtn }
                >
                  {correctAnswer}
                </button>
              );
            }
            return (
              <button
                key={ incorrectAnswers }
                type="button"
                value="incorrect"
                data-testid={ `wrong-answer-${indexQuestion}` }
                onClick={ this.setColorsOnClick }
                style={ { border: buttonIncorrectAnswer } }
                disabled={ onOffBtn }
              >
                {incorrectAnswers}
              </button>
            );
          })}
        </div>
        <NextButton
          statusButton={ statusButton }
          handleClickIndex={ this.handleClickIndex }
          index={ index }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getResults: state.game.results,
  onOffBtn: state.game.stopTimer,
});

const mapDispatchToProps = (dispatch) => ({
  getIndex: (index) => dispatch(actionIndex(index)),
});

AnswersButtons.propTypes = {
  getResults: PropTypes.arrayOf(PropTypes.any).isRequired,
  onOffBtn: PropTypes.bool.isRequired,
  acertouMizeravi: PropTypes.func.isRequired,
  limparIntervalo: PropTypes.func.isRequired,
  getIndex: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswersButtons);
