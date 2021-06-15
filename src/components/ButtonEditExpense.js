import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEdit } from '../actions/walletAction';

class ButtonEditExpense extends Component {
  saveEdited() {
    const { expenses, state, save } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== state.id);
    newExpenses.push(state);
    const orderExpenses = newExpenses.sort((a, b) => {
      if (a.id < b.id) {
        const magicNumber = -1;
        return magicNumber;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    save(orderExpenses);
  }

  render() {
    const { defautState } = this.props;
    return (
      <button
        type="button"
        onClick={ () => {
          this.saveEdited();
          defautState();
        } }
      >
        Editar despesa
      </button>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  save: (newExpenses) => dispatch(saveEdit(newExpenses)),
});

ButtonEditExpense.propTypes = {
  save: PropTypes.func.isRequired,
  defautState: PropTypes.func.isRequired,
  state: PropTypes.shape.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonEditExpense);
