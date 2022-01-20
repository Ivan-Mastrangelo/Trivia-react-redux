import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswersButtons extends Component {
  constructor() {
    super();
    this.state = {
      arrayAnswers: [],
      color: '',
    };
  }

  componentDidMount() {
    this.aleatoryAnswers();
  }

  clickButton = ({ target }) => {
    const { value } = target;
    if (value === 'correct') {
      this.setState({
        color: '3px solid rgb(6, 240, 15)',
      });
    }
    if (value === 'incorret') {
      this.setState({
        color: '3px solid rgb(255, 0, 0)',
      });
    }
  }

  aleatoryAnswers() {
    const { getResults } = this.props;
    if (getResults.length > 0) {
      const correctAnswer = getResults[0].correct_answer;
      const arrayIncorrectAnswers = getResults[0].incorrect_answers;
      const correct_answers = { correctAnswer };
      const incorrectAnswers = arrayIncorrectAnswers.map((incorrectAnswers) => ({
        incorrectAnswers,
      }));
      // https://flaviocopes.com/how-to-shuffle-array-javascript/
      const arrWithAnswers = [correct_answers, ...incorrectAnswers];
      const magicNumber = 0.5;
      const newArrAleatory = arrWithAnswers.sort(() => Math.random() - magicNumber);
      this.setState({
        arrayAnswers: newArrAleatory,
      });
    }
  }

  render() {
    const { color, arrayAnswers } = this.state;
    return (
      <div
        data-testid="answer-options"
      >
        {arrayAnswers.map(({ correctAnswer, incorrectAnswers }, index) => {
          if (correctAnswer) {
            return (
              <button
                type="button"
                value="correct"
                data-testid="correct-answer"
                onClick={ (e) => this.clickButton(e) }
                style={{ border: color }}
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
              onClick={ (e) => this.clickButton(e) }
              style={{ border: color }}
            >
              {incorrectAnswers}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getResults: state.game.results,
});

export default connect(mapStateToProps)(AnswersButtons);
