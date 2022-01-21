import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Inputs from '../components/form/Inputs';
import Button from '../components/form/Button';
import { actionUser, requestApiToken } from '../actions';
import ButtonSettings from '../components/form/ButtonSettings';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      gravatarEmail: '',
      name: '',
      score: 0,
      isDisable: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.enableBtn());
  }

  enableBtn = () => {
    const { gravatarEmail, name } = this.state;
    const zero = 0;
    if (gravatarEmail.length > zero && name.length > zero) {
      this.setState({
        isDisable: false,
      });
    } else {
      this.setState({
        isDisable: true,
      });
    }
  }

  clickBtn = () => {
    const { getToken, getInfoUser } = this.props;
    getInfoUser(this.state);
    getToken();
  };

  clickBtnSettings = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { token } = this.props;
    const { gravatarEmail, name, isDisable } = this.state;
    const { handleChange, clickBtn, clickBtnSettings } = this;
    return (
      <div>
        <Inputs
          handleChange={ handleChange }
          gravatarEmail={ gravatarEmail }
          name={ name }
        />
        <Button
          isDisable={ isDisable }
          clickBtn={ clickBtn }
        />
        <ButtonSettings
          clickBtn={ clickBtnSettings }
        />
        {/* Solução de redirect pedida na mentoria da Samantha/Arthur */}
        {token && <Redirect to="/game" />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(requestApiToken()),
  getInfoUser: (state) => dispatch(actionUser(state)),
});

const mapStateToProps = (state) => ({
  token: state.token,
});

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  getInfoUser: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
