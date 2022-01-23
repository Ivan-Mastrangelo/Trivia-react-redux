import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class MessageFeedback extends Component {
  render() {
    const scoreLessThanThree = 'Could be better...';
    const scoreHigherThanThree = 'Well Done!';
    const MAGIC_NUMBER = 3;
    const MAX_MAGIC_NUMBER = 5;
    const numberQuestionCorrect = Math.random().toFixed(1) * (MAX_MAGIC_NUMBER - 0) + 0;
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

/* const mapStateToProps = (state) => ({
  getUserScore: state.user.score
  getUserQuestion: state.
}) */

/* export default connect(mapStateToProps, null)(MessageFeedback) */
