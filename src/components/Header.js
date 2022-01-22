import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  HeaderContainer,
  Email,
  Expenses,
  BalanceTitle,
  ExpenseContainer,
} from '../css/Header_Style';

class Header extends Component {
  totalCost(expenses) {
    const total = expenses.reduce((acc, { exchangeRates, currency, value }) => {
      const coin = exchangeRates[currency].ask;
      const result = acc + coin * value;
      return parseFloat(result.toFixed(2));
    }, 0);
    return total;
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <HeaderContainer>
        <Email data-testid="email-field">{email}</Email>
        <ExpenseContainer>
          <BalanceTitle>BALANÇO TOTAL</BalanceTitle>
          <Expenses>
            <span data-testid="total-field">{this.totalCost(expenses)}</span>
            <span data-testid="header-currency-field">BRL</span>
          </Expenses>
        </ExpenseContainer>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Header);
