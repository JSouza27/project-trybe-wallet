import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { saveExpenses } = this.props;
    return (
      <button
        type="button"
        onClick={ saveExpenses }
      >
        Adicionar despesa
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  saveExpenses: PropTypes.func.isRequired,
};

export default ButtonAdd;
