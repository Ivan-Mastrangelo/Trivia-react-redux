import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Inputs from '../components/form/Inputs';
import Button from '../components/form/Button';
import { actionUser, requestApiToken } from '../actions';

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
    const { getToken, token, history, getInfoUser } = this.props;
    getInfoUser(this.state);
    getToken();
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { handleChange, clickBtn } = this;
    const { gravatarEmail, name, isDisable } = this.state;
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
  token: PropTypes.string.isRequired,
  getInfoUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
