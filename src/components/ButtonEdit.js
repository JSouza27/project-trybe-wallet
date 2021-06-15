import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { enableEdit } from '../actions/walletAction';

class ButtonEdit extends Component {
  editInfo() {
    const { expenses, Id, EnableEdit } = this.props;
    const filterExpense = expenses.find((expense) => expense.id === Id);
    EnableEdit(filterExpense);
  }

  render() {
    return (
      <button
        data-testid="edit-btn"
        type="button"
        onClick={ (e) => {
          e.preventDefault();
          this.editInfo();
        } }
      >
        Editar
      </button>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  EnableEdit: (filter) => dispatch(enableEdit(filter)),
});

ButtonEdit.propTypes = {
  EnableEdit: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  Id: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonEdit);
