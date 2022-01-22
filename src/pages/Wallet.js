import React, { Component } from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import ExpenseTable from '../components/ExpenseTable';
import Main from '../css/Wallet_Style';

class Wallet extends Component {
  render() {
    return (
      <Main>
        <Header />
        <Form />
        <ExpenseTable />
      </Main>
    );
  }
}

export default Wallet;
