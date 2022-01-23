import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class HeaderFeedback extends Component {
  render() {
    const { getUserName, getUserEmail, getUserScore } = this.props;
    return (
      <div>
        <header>
          {/*  img vinda do gravatar 01  */}
          <img src={ `https://www.gravatar.com/avatar/${md5(getUserEmail).toString()}` } alt="imagem do gravatar" data-testid="header-profile-picture" />

          {/*  NOME do usuario  */}
          <span data-testid="header-player-name">
            nome do usuario:
            {' '}
            { getUserName }
            {' '}
          </span>
          { /* placar do usuario com o VALOR ATUAL */ }
          <span>
            Placar:
            {' '}
          </span>
          <span data-testid="header-score">
            { getUserScore }
          </span>

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getUserName: state.player.name,
  getUserEmail: state.player.gravatarEmail,
  getUserScore: state.player.score,
});

export default connect(mapStateToProps, null)(HeaderFeedback);

HeaderFeedback.propTypes = {
  getUserName: PropTypes.string.isRequired,
  getUserEmail: PropTypes.string.isRequired,
  getUserScore: PropTypes.number.isRequired,
};
