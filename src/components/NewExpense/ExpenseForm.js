import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [showForm, setShowForm] = useState(false);

  function dataChangeHandler(e) {
    const { name, value } = e.target;
    setNewExpense((prevState) => ({ ...prevState, [name]: value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenseData = { ...newExpense, date: new Date(newExpense.date) };
    props.onSaveExpenseData(expenseData);
    setNewExpense({ title: "", amount: "", date: "" });
    toggleFormHandler();
  }

  function toggleFormHandler() {
    setShowForm((prevValue) => !prevValue);
  }

  if (!showForm)
    return (
      <div>
        <div className="new-expense__controls"></div>
        <div className="new-expense__action">
          <button onClick={toggleFormHandler}>Add New Expense</button>
        </div>
      </div>
    );
  else {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              name="title"
              value={newExpense.title}
              type="text"
              onChange={dataChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              name="date"
              value={newExpense.date}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dataChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              name="amount"
              value={newExpense.amount}
              type="number"
              min="0.01"
              step="0.01"
              onChange={dataChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__action">
          <button onClick={toggleFormHandler} type="reset">
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
