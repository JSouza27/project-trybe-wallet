import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getInfoApi,
  saveEdit,
  stateDispatch,
} from '../actions/walletAction';
import ButtonAdd from './ButtonAdd';
import ButtonEditExpense from './ButtonEditExpense';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.saveExpenses = this.saveExpenses.bind(this);
    this.defautState = this.defautState.bind(this);
  }

  componentDidMount() {
    const { fetchApiThunk } = this.props;
    fetchApiThunk();
  }

  componentDidUpdate(prevProps) {
    const { enableEdit, edit } = this.props;

    if (enableEdit !== prevProps.enableEdit) {
      this.setState(edit);
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  fieldValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          data-testid="value-input"
          id="value"
          name="value"
          type="text"
          value={ value }
          onChange={ (e) => { this.handleChange(e); } }
        />
      </label>
    );
  }

  fieldDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          data-testid="description-input"
          id="description"
          name="description"
          type="text"
          value={ description }
          maxLength="200"
          onChange={ (e) => { this.handleChange(e); } }
        />
      </label>
    );
  }

  fieldCoin() {
    const { currencies } = this.props;
    const { currency } = this.state;
    const coins = currencies;

    return (
      <label htmlFor="coin">
        Moeda
        <select
          data-testid="currency-input"
          id="coin"
          name="currency"
          value={ currency }
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
    const { method } = this.state;
    return (
      <label htmlFor="payment_method">
        Método de pagamento
        <select
          data-testid="method-input"
          id="payment_method"
          name="method"
          value={ method }
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
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          data-testid="tag-input"
          id="tag"
          name="tag"
          value={ tag }
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

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  defautState() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { enableEdit } = this.props;
    return (
      <form>
        {this.fieldValue()}
        {this.fieldDescription()}
        {this.fieldCoin()}
        {this.fieldPaymentMethod()}
        {this.fieldTag()}
        {
          (enableEdit)
            ? <ButtonEditExpense defautState={ this.defautState } state={ this.state } />
            : <ButtonAdd saveExpenses={ this.saveExpenses } />
        }
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, edit, expenses, enableEdit } }) => ({
  currencies,
  edit,
  expenses,
  enableEdit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiThunk: () => dispatch(getInfoApi()),
  expensesDispatch: (state) => dispatch(stateDispatch(state)),
  editDispatch: (state) => dispatch(saveEdit(state)),
});

Form.propTypes = {
  fetchApiThunk: PropTypes.func.isRequired,
  expensesDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  edit: PropTypes.shape.isRequired,
  enableEdit: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
