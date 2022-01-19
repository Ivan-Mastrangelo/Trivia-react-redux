import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswersButtons extends Component {
  constructor() {
    super();
    this.state = {
      arrayAnswers: [],
    };
  }

  componentDidMount() {
    this.aleatoryAnswers();
  }

  aleatoryAnswers() {
    const { getResults } = this.props;
    const correctAnswer = getResults[0].correct_answer;
    const arrayIncorrectAnswers = getResults[0].incorrect_answers;
    const correct_answers = { correctAnswer };
    const incorrectAnswers = arrayIncorrectAnswers.map((answer) => ({
      answer,
    }));

    console.log(incorrectAnswers);
    this.setState({
      arrayAnswers: [correct_answers, incorrectAnswers],
    });
  }

  render() {
    const { arrayAnswers, getResults } = this.props;
    return (
      <div
        data-testid="answer-options"
      >
        <button
          type="button"
          data-testid="correct-answer"
        >
          {getResults[0].correct_answer}
        </button>
        {getResults[0].incorrect_answers.map((answer, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `wrong-answer-${index}` }
          >
            {answer}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getResults: state.game.results,
});

export default connect(mapStateToProps)(AnswersButtons);
