import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteExpenses } from '../actions/walletAction';

class ButtonDelete extends Component {
  constructor() {
    super();

    this.deleteCost = this.deleteCost.bind(this);
  }

  deleteCost() {
    const { Id, expenses, removeExpense } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== Id);
    removeExpense(newExpenses);
  }

  render() {
    return (
      <button
        data-testid="delete-btn"
        type="button"
        onClick={ () => { this.deleteCost(); } }
      >
        Delete
      </button>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (newExpenses) => dispatch(deleteExpenses(newExpenses)),
});

ButtonDelete.propTypes = {
  Id: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDelete);
