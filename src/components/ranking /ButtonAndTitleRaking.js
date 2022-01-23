import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/* withRouter https://stackoverflow.com/questions/36467126/reactjs-can-not-read-property-push-of-undefined  */
/*  usei no trybeWallet  */
import { withRouter } from 'react-router-dom';

class ButtonAndTitleRaking extends Component {
  handleClickRaking = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        {/*  requisito 16  ola '-' */}
        <h1 data-testid="ranking-title">componente RANKING</h1>
        {/* requisito 17 */}
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleClickRaking }
        >
          Ranking
        </button>

      </div>
    );
  }
}

ButtonAndTitleRaking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(connect()(ButtonAndTitleRaking));
