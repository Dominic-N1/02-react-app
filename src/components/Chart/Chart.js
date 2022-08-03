import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const maxValue =
    props.dataPoints.reduce((acc, dataPoint) => {
      acc = acc < dataPoint.value ? dataPoint.value : acc;
      return acc;
    }, 0) / 100;

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={Math.round(maxValue ? dataPoint.value / maxValue : 0) + "%"}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
