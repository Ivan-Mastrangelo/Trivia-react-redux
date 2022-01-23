import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MessageFeedback extends Component {
  render() {
    const { getUserGoal, getUserScore } = this.props;
    const scoreLessThanThree = 'Could be better...';
    const scoreHigherThanThree = 'Well Done!';
    const MAGIC_NUMBER = 3;
    const numberQuestionCorrect = getUserGoal;
    return (
      <div>
        {/*  requisito 13  */}
        <p data-testid="feedback-text">
          MessageFeedback:
          {' '}
          {
            numberQuestionCorrect >= MAGIC_NUMBER
              ? scoreHigherThanThree : scoreLessThanThree
          }
        </p>
        <p>
          Número de acertos:
          <span
            data-testid="feedback-total-question"
          >
            {numberQuestionCorrect}
          </span>
        </p>
        <p>
          Número de pontos:
          <span
            data-testid="feedback-total-score"
          >
            {getUserScore}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // getUserScore: state.user.score,
  getUserGoal: state.player.assertions,
  getUserScore: state.player.score,
});

MessageFeedback.propTypes = {
  getUserGoal: PropTypes.number.isRequired,
  getUserScore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(MessageFeedback);
