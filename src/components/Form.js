import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getInfoApi,
  stateDispatch,
} from '../actions/walletAction';

class Form extends Component {
  constructor(props) {
    super(props);

    const INITIAL_STATE = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.state = INITIAL_STATE;

    this.saveExpenses = this.saveExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchApiThunk } = this.props;
    fetchApiThunk();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  fieldValue() {
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          name="value"
          type="text"
          onChange={ (e) => { this.handleChange(e); } }
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
          name="description"
          type="text"
          maxLength="200"
          onChange={ (e) => { this.handleChange(e); } }
        />
      </label>
    );
  }

  fieldCoin() {
    const { currencies } = this.props;
    const coins = currencies;

    return (
      <label htmlFor="coin">
        Moeda
        <select
          id="coin"
          name="currency"
          onChange={ (e) => { this.handleChange(e); } }
        >
          {
            coins.map((item, index) => (
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
        <select
          id="payment_method"
          name="method"
          onChange={ (e) => { this.handleChange(e); } }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  fieldTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ (e) => { this.handleChange(e); } }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  saveExpenses() {
    const { expensesDispatch } = this.props;

    expensesDispatch(this.state);
  }

  render() {
    return (
      <form>
        {this.fieldValue()}
        {this.fieldDescription()}
        {this.fieldCoin()}
        {this.fieldPaymentMethod()}
        {this.fieldTag()}
        <button
          type="button"
          onClick={ this.saveExpenses }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, totalExpenses } }) => ({
  currencies,
  totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiThunk: () => dispatch(getInfoApi()),
  expensesDispatch: (state) => dispatch(stateDispatch(state)),
});

Form.propTypes = {
  fetchApiThunk: PropTypes.func.isRequired,
  expensesDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
