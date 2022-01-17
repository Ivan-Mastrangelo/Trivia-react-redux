import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Inputs from '../components/form/Inputs';
import Button from '../components/form/Button';
import { requestApiToken } from '../actions';
import ButtonSettings from '../components/form/ButtonSettings';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      isDisable: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.enableBtn());
  }

  enableBtn = () => {
    const { email, name } = this.state;
    const zero = 0;
    if (email.length > zero && name.length > zero) {
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
    const { getToken, token } = this.props;
    getToken();
    localStorage.setItem('token', token);
  };

  clickBtnSettings = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { handleChange, clickBtn, clickBtnSettings } = this;
    const { email, name, isDisable } = this.state;
    return (
      <div>
        <Inputs
          handleChange={ handleChange }
          email={ email }
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
});

const mapStateToProps = (state) => ({
  token: state.token,
});

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
