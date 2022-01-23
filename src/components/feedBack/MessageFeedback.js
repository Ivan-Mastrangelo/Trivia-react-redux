import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MessageFeedback extends Component {
  render() {
    const { getUserGoal } = this.props;
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

        <div>
          {/*  requisito 14  */}
          <p feedback-total-score>
            { /* valor do placar final */ }
            Placar final:
            {' '}
            { numberQuestionCorrect }
          </p>
          <p data-testid="feedback-total-question">
            {/*  numero de perguntas acertadas  */}
            voce acertou:
            {' '}
            {
              numberQuestionCorrect
            /*  O número de perguntas que a pessoa acertou deve ser exibido */
            }

          </p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // getUserScore: state.user.score,
  getUserGoal: state.player.assertions,
});

MessageFeedback.propTypes = {
  getUserGoal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(MessageFeedback);
