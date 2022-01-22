import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SaveButton } from '../css/Form_Style';

class ButtonAdd extends Component {
  render() {
    const { saveExpenses } = this.props;
    return (
      <SaveButton
        type="button"
        onClick={ saveExpenses }
      >
        Adicionar despesa
      </SaveButton>
    );
  }
}

ButtonAdd.propTypes = {
  saveExpenses: PropTypes.func.isRequired,
};

export default ButtonAdd;
