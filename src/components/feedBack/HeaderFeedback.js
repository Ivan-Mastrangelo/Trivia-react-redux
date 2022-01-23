import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class HeaderFeedback extends Component {
  render() {
    const { getUserName, getUserEmail } = this.props;
    return (
      <div>
        <header>
          {/*  img vinda do gravatar  */}
          <img src={ `https://www.gravatar.com/avatar/${md5(getUserEmail).toString()}` } alt="imagem do gravatar" data-testid="header-profile-picture" />

          {/*  NOME do usuario  */}
          <span data-testid="header-player-name">
            nome do usuario:
            {' '}
            { getUserName }
          </span>
          { /* placar do usuario com o VALOR ATUAL */ }
          <span data-testid="header-score">
            Placar:
            {' '}
            0
          </span>

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getUserName: state.player.name,
  getUserEmail: state.player.gravatarEmail,
});

export default connect(mapStateToProps, null)(HeaderFeedback);

HeaderFeedback.propTypes = {
  getUserName: PropTypes.string.isRequired,
  getUserEmail: PropTypes.string.isRequired,
};
