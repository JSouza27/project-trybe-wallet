import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { setEmailAction, setPasswordAction } from '../actions/userAction';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userPassword: '',
      errors: {},
      btnDisable: true,
      login: false,
    };

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.validate(this.state);
    });
  }

  validate(state) {
    const errors = {};
    const lengthPassword = 6;

    if (!/(\w+[0-9]*)+@\w+\.\w+/.test(state.userEmail)) {
      errors.errorEmail = 'Por favor, insira um email válido';
      return this.setState({ btnDisable: true, errors });
    }

    if (state.userPassword.length < lengthPassword) {
      errors.errorPassword = 'Por favor, insira uma senha acima 6 caracteres';
      return this.setState({ btnDisable: true, errors });
    }

    return this.setState({ btnDisable: false, errors });
  }

  redirect() {
    this.setState({ login: true });
  }

  render() {
    const { userEmail, userPassword, errors, btnDisable, login } = this.state;
    const { setUserEmail, setUserPassword } = this.props;

    if (login) {
      return <Redirect to="/carteira" />;
    }
    return (
      <section>
        <div>Login</div>
        <label htmlFor="userEmail">
          Email
          <input
            data-testid="email-input"
            name="userEmail"
            type="email"
            placeholder="email"
            onChange={ this.handleChange }
          />
          {errors.errorEmail && <span>{errors.errorEmail}</span>}
        </label>
        <label htmlFor="userPassword">
          Senha
          <input
            data-testid="password-input"
            name="userPassword"
            type="password"
            placeholder="senha"
            onChange={ this.handleChange }
          />
          {errors.errorPassword && <span>{errors.errorPassword}</span>}
        </label>
        <button
          type="button"
          onClick={ () => {
            setUserEmail(userEmail);
            setUserPassword(userPassword);
            this.redirect();
          } }
          disabled={ btnDisable }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (userEmail) => dispatch(setEmailAction(userEmail)),
  setUserPassword: (userPassword) => dispatch(setPasswordAction(userPassword)),
});

Login.propTypes = {
  setUserEmail: PropTypes.func.isRequired,
  setUserPassword: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
