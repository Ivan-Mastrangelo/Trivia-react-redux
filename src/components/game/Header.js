import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { getEmail, getName, getScore } = this.props;
    return (
      <div>
        <img src={ `https://www.gravatar.com/avatar/${md5(getEmail).toString()}` } alt="imagem do gravatar" data-testid="header-profile-picture" />
        <span data-testid="header-player-name">
          Nome:
          {' '}
          {getName}
        </span>
        {' '}
        <span data-testid="header-score">
          Placar:
          {' '}
          {getScore}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.player.gravatarEmail,
  getName: state.player.name,
  getScore: state.player.score,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getName: PropTypes.string.isRequired,
  getScore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
