import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Feb" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Apr" },
    { value: 0, label: "May" },
    { value: 0, label: "Jun" },
    { value: 0, label: "Jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];

  for (const expense of props.data) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  // const chartDataPoints = props.data.map((el) => ({
  //   label: Intl.DateTimeFormat(navigator.language, {
  //     month: "short",
  //   }).format(el.date),
  //   value: el.amount,
  // }));

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;