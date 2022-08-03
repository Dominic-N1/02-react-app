import Expenses from "./components/Expenses/Expenses";
import data from "./data";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    const newExpense = { ...expense };
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
