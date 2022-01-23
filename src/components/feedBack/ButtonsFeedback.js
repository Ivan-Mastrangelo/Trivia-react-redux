import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/* withRouter https://stackoverflow.com/questions/36467126/reactjs-can-not-read-property-push-of-undefined  */
/*  usei no trybeWallet  */
import { withRouter } from 'react-router-dom';

class ButtonsFeedback extends Component {
  handleClickPlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleClickRaking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  /*  NAO PRECISA MECHER NESSE COMPONENTE  */
  render() {
    return (
      <div>
        {/*  requisito 15  */}
        <button
          type="button"
          onClick={ this.handleClickPlayAgain }
          data-testid="btn-play-again"
        >
          Play Again
        </button>
        {/*  requisito 16  */}
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.handleClickRaking }
        >
          Ranking
        </button>
      </div>
    );
  }
}

export default withRouter(connect()(ButtonsFeedback));

ButtonsFeedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
