import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';
import { ButtonContainer, Row, TableContent } from '../css/ExpenseTable_Style';

class ExpenseTable extends Component {
  constructor() {
    super();

    this.convertedValue = this.convertedValue.bind(this);
  }

  convertedValue(value, exchangeRates) {
    const converted = value * exchangeRates;
    return parseFloat(converted).toFixed(2);
  }

  tExpenses() {
    const { expenses } = this.props;
    const row = expenses.map((expense, index) => {
      const { id, description, tag, method, value, currency,
        exchangeRates: { [currency]: { name, ask } } } = expense;

      return (
        <Row key={ index }>
          <tr>
            <th>Descrição</th>
            <td>{description}</td>
          </tr>
          <tr>
            <th>Tag</th>
            <td>{tag}</td>
          </tr>
          <tr>
            <th>Método de pagamento</th>
            <td>{method}</td>
          </tr>
          <tr>
            <th>Valor</th>
            <td>{value}</td>
          </tr>
          <tr>
            <th>Moeda</th>
            <td>{name.replace('/Real Brasileiro', '')}</td>
          </tr>
          <tr>
            <th>Valor convertido</th>
            <td>{this.convertedValue(1, ask)}</td>
          </tr>
          <tr>
            <th>Moeda de conversão</th>
            <td>{this.convertedValue(value, ask)}</td>
            <td>Real</td>
          </tr>
          <tr>
            <th>Editar/Excluir</th>
            <ButtonContainer>
              <ButtonEdit Id={ id } />
              <ButtonDelete Id={ id } />
            </ButtonContainer>
          </tr>
        </Row>
      );
    });

    return row;
  }

  render() {
    return (
      <TableContent>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              this.tExpenses()
            }
          </tbody>
        </table>
      </TableContent>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
