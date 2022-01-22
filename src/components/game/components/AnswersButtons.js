import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AnswersButtons extends Component {
  constructor() {
    super();
    this.state = {
      arrayAnswers: [],
      buttonCorrectAnswer: '',
      buttonIncorrectAnswer: '',
      difficulty: '',
      statusButton: 'hidden',
    };
  }

  componentDidMount() {
    this.aleatoryAnswers();
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

  aleatoryAnswers() {
    const { getResults } = this.props;
    if (getResults.length > 0) {
      const { difficulty } = getResults[0];
      // const difficulty = getResults[0].difficulty;
      this.setState({
        difficulty,
      });
      const correctAnswer = getResults[0].correct_answer;
      const arrayIncorrectAnswers = getResults[0].incorrect_answers;
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
    } = this.state;
    const { onOffBtn } = this.props;
    return (
      <>
        <div
          data-testid="answer-options"
        >
          {arrayAnswers.map(({ correctAnswer, incorrectAnswers }, index) => {
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
                data-testid={ `wrong-answer-${index}` }
                onClick={ this.setColorsOnClick }
                style={ { border: buttonIncorrectAnswer } }
                disabled={ onOffBtn }
              >
                {incorrectAnswers}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          data-testid="btn-next"
          style={ { visibility: statusButton } }
        >
          Next
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getResults: state.game.results,
  onOffBtn: state.game.stopTimer,
});

export default connect(mapStateToProps)(AnswersButtons);

AnswersButtons.propTypes = {
  getResults: PropTypes.arrayOf(PropTypes.any).isRequired,
  onOffBtn: PropTypes.bool.isRequired,
  acertouMizeravi: PropTypes.func.isRequired,
  limparIntervalo: PropTypes.func.isRequired,
};
