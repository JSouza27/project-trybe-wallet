import React, { Component } from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  render() {
    return (
      <main>
        <Header />
        <Form />
        <ExpenseTable />
      </main>
    );
  }
}

export default Wallet;
