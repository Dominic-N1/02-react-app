import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.data.length === 0)
    return (
      <div className="expenses-list__fallback">
        <h2>Found no expenses</h2>
      </div>
    );

  return (
    <ul className="expenses-list">
      {props.data.map((el) => (
        <ExpenseItem
          key={el.id}
          date={el.date}
          title={el.title}
          amount={el.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
