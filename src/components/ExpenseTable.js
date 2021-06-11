import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseTable extends Component {
  convertedValue(value, exchangeRates) {
    const converted = value * exchangeRates;
    return parseFloat(converted.toFixed(2));
  }

  tExpenses() {
    const { expenses } = this.props;
    const row = expenses.map((expense, index) => {
      const { description, tag, method, value, currency,
        exchangeRates: { [currency]: { name, ask } } } = expense;

      return (
        <tr key={ index }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{name.replace('/Real Brasileiro', '')}</td>
          <td>{this.convertedValue(1, ask)}</td>
          <td>
            {
              this.convertedValue(value, ask)
            }
          </td>
          <td>Real</td>
        </tr>
      );
    });

    return row;
  }

  render() {
    return (
      <section>
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
      </section>
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
