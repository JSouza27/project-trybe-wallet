import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends Component {
  fieldValue() {
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          type="text"
          onChange={ () => {} }
        />
      </label>
    );
  }

  fieldDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
          maxLength="200"
          onChange={ () => {} }
        />
      </label>
    );
  }

  fieldCoin() {
    return (
      <label htmlFor="coin">
        Moeda
        <select id="coin">
          <option>aguardando API</option>
        </select>
      </label>
    );
  }

  fieldPaymentMethod() {
    return (
      <label htmlFor="payment_method">
        Método de pagamento
        <select id="payment_method">
          <option value="cash">Dinheiro</option>
          <option value="credit_card">Cartão de crédito</option>
          <option value="debit_card">Cartão de débito</option>
        </select>
      </label>
    );
  }

  fieldTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag">
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          {this.fieldValue()}
          {this.fieldDescription()}
          {this.fieldCoin()}
          {this.fieldPaymentMethod()}
          {this.fieldTag()}
        </form>
      </section>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
