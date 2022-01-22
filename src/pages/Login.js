import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { setEmailAction, setNameAction, setPasswordAction } from '../actions/userAction';
import {
  App,
  Button,
  FormContent,
  FormLogin,
  ImageLogo,
  InfoFields,
  InputContainer,
  SignIn,
} from '../css/login_style';
import logo from '../wallet-logo.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userPassword: '',
      userName: '',
      error: false,
      btnDisable: true,
      login: false,
    };

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
    this.nameInfo = this.nameInfo.bind(this);
    this.emailInfo = this.emailInfo.bind(this);
    this.passwordInfo = this.passwordInfo.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.validate(this.state);
    });
  }

  signIn(state) {
    const { setUserEmail, setUserPassword, setUserName } = this.props;

    if (this.validate(state)) {
      if (state.userName.length <= 0) {
        return this.setState({ userName: 'Humano' });
      }

      setUserEmail(state.userEmail);
      setUserPassword(state.userPassword);
      setUserName(state.userName);
      this.redirect();
    }
  }

  validate(state) {
    const lengthPassword = 6;
    const { userEmail, userPassword } = state;

    if (!/(\w+[0-9]*)+@\w+\.\w+/.test(state.userEmail) || userEmail === '') {
      this.setState({ btnDisable: true, error: true });
    } else {
      this.setState({ error: false });
    }

    if (userPassword.length < lengthPassword || userPassword === '') {
      this.setState({ btnDisable: true, error: true });
    } else {
      this.setState({ error: false });
    }

    if (state.error === false) {
      this.setState({ btnDisable: false });
      return true;
    }
  }

  redirect() {
    this.setState({ login: true });
  }

  nameInfo() {
    const { userName } = this.state;
    const label = 'Active label';
    let isActive = false;

    if (userName !== '') {
      isActive = true;
    }
    return (
      <InfoFields className="form-group">
        <label className={ isActive ? label : 'label' } htmlFor="userName">
          <span className="span-title">Nome</span>
          <input
            className="input"
            data-testid="name-input"
            name="userName"
            type="text"
            onChange={ this.handleChange }
            value={ userName }
          />
        </label>
      </InfoFields>
    );
  }

  emailInfo() {
    const { userEmail } = this.state;
    let isActive = false;

    if (userEmail !== '') {
      isActive = true;
    }

    return (
      <InfoFields className="form-group">
        <label className={ isActive ? 'label Active' : 'label' } htmlFor="userEmail">
          <span className="span-title">
            Email
          </span>
          <input
            className="input"
            data-testid="email-input"
            name="userEmail"
            type="email"
            onChange={ this.handleChange }
            value={ userEmail }
          />
        </label>
      </InfoFields>
    );
  }

  passwordInfo() {
    const { userPassword } = this.state;

    let isActive = false;

    if (userPassword !== '') {
      isActive = true;
    }

    return (
      <InfoFields className="form-group">
        <label className={ isActive ? 'label Active' : 'label' } htmlFor="userPassword">
          <span className="span-title">
            Senha
          </span>
          <input
            className="input"
            data-testid="password-input"
            name="userPassword"
            type="password"
            onChange={ this.handleChange }
            value={ userPassword }
          />
        </label>
      </InfoFields>
    );
  }

  render() {
    const { btnDisable, login } = this.state;

    if (login) {
      return <Redirect to="/carteira" />;
    }
    return (
      <App className="App">
        <FormLogin className="form-login">
          <FormContent className="form-content">
            <ImageLogo src={ logo } alt="logo-trybe-wallet" />
            <SignIn>SING IN</SignIn>
            <InputContainer>
              {this.nameInfo()}
              {this.emailInfo()}
              {this.passwordInfo()}
            </InputContainer>
          </FormContent>
          <Button
            className={ btnDisable ? '' : 'btn-active' }
            type="button"
            onClick={ () => {
              this.signIn(this.state);
            } }
            disabled={ btnDisable }
          >
            ENTRAR
          </Button>
        </FormLogin>
      </App>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (userEmail) => dispatch(setEmailAction(userEmail)),
  setUserPassword: (userPassword) => dispatch(setPasswordAction(userPassword)),
  setUserName: (userName) => dispatch(setNameAction(userName)),
});

Login.propTypes = {
  setUserEmail: PropTypes.func.isRequired,
  setUserPassword: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
