import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Inputs from '../components/form/Inputs';
import Button from '../components/form/Button';
import { actionUser, requestApiToken, requestApiGame } from '../actions';
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

  clickBtn = async () => {
    const { getToken, history, getInfoUser, getQuestions } = this.props;
    getInfoUser(this.state);
    await getToken();
    await getQuestions();
    history.push('/game');
  };

  clickBtnSettings = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(requestApiToken()),
  getInfoUser: (state) => dispatch(actionUser(state)),
  getQuestions: () => dispatch(requestApiGame()),
});

const mapStateToProps = (state) => ({
  token: state.token,
});

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  getInfoUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
