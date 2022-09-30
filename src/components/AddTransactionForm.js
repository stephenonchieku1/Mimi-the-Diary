import React, { useState } from "react";

function AddTransactionForm({ isSendLoading, addTransactionHandler }) {
  const [dateInput, setDateInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [amountInput, setAmountInput] = useState('');

  const submitData = async (event) => {
    event.preventDefault();
    if (dateInput.length === 0 || descriptionInput.length === 0 || categoryInput.length === 0 || amountInput.length === 0){
      return;
    }
    try {
      await addTransactionHandler(dateInput, descriptionInput, categoryInput, amountInput);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="ui segment">
      <form onSubmit={submitData} className="ui form">
        <div className="inline fields">
          <input onChange={(event) => {setDateInput(event.target.value)}} type="date" name="date" />
          <input onChange={(event) => {setDescriptionInput(event.target.value)}} type="text" name="description" placeholder="Description" />
          <input onChange={(event) => {setCategoryInput(event.target.value)}} type="text" name="category" placeholder="Category" />
          <input onChange={(event) => {setAmountInput(event.target.value)}} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        {isSendLoading && <p>Loading...</p>}
        {!isSendLoading && <button className="ui button" type="submit">
          Add Transaction
        </button>}
      </form>
    </div>
  );
}

export default AddTransactionForm;
