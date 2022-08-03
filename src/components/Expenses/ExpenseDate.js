import Card from "../UI/Card";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const dateMonth = Intl.DateTimeFormat(navigator.language, {
    month: "long",
  }).format(props.date);
  const dateYear = Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
  }).format(props.date);
  const dateDay = Intl.DateTimeFormat(navigator.language, {
    day: "numeric",
  }).format(props.date);

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{dateMonth}</div>
      <div className="expense-date__year">{dateYear}</div>
      <div className="expense-date__day">{dateDay}</div>
    </Card>
  );
}

export default ExpenseDate;
