
import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [isGetLoading, setIsGetLoading] = useState(false);
  const [isSendLoading, setIsSendLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactionsHandler = async  () => {
      setIsGetLoading(true);
      const response = await fetch('http://localhost:8001/transactions');
      const responseData = await response.json();
      setTransactions(responseData);
      setIsGetLoading(false);
    };
    getTransactionsHandler();
  }, []);

  useEffect(() => {
    setTransactions(transactions);
  }, [transactions]);

  const searchHandler = async (input) => {
    setTransactions(transactions.filter((each) => each.description.toLowerCase().includes(input)));

  }


  const addTransactionHandler = async (date, description, category, amount) => {
    try {
      setIsSendLoading(true);
      const response = await fetch('http://localhost:8001/transactions', { method: 'POST', headers: { 'Content-Type': 'application/json', 'accept': 'application/json' }, body: JSON.stringify({ date, description, category, amount: parseInt(amount) }) });
      const responseData = await response.json();
      setTransactions(prevTransactions => [...prevTransactions, responseData]);
    } catch(err) {
      console.log(err);
    } finally {
      setIsSendLoading(false);
    }
  }

  return (
    <div>
      <Search searchHandler={searchHandler} />
      <AddTransactionForm isSendLoading={isSendLoading} addTransactionHandler={addTransactionHandler} />
      <TransactionsList isGetLoading={isGetLoading} transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
  
