import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Inputs from '../components/form/Inputs';
import Button from '../components/form/Button';
import { requestApiToken } from '../actions';

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

  render() {
    const { handleChange, clickBtn } = this;
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
      </div>
    );
  }
}

Login.propTypes = {
  getToken: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(requestApiToken()),
});

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
