import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInfoApi } from '../actions/walletAction';

import Header from '../components/Header';
// import fecthURL from '../service/ economyApi';

class Wallet extends Component {
  componentDidMount() {
    const { fetchApiThunk } = this.props;
    fetchApiThunk();
  }

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
    const { coins } = this.props;
    const arrCoins = Object.keys(coins).filter((coin) => coin !== 'USDT');

    return (
      <label htmlFor="coin">
        Moeda
        <select id="coin">
          {
            arrCoins.map((item, index) => (
              <option key={ index } value={ item }>{item}</option>
            ))
          }
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
    return (
      <section>
        <Header />
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

const mapStateToProps = ({ user: { email }, wallet: { coins } }) => ({
  email,
  coins,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiThunk: () => dispatch(getInfoApi()),
});

Wallet.propTypes = {
 
  fetchApiThunk: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
