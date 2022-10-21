import BarChart from "./BarChart";

const Spend = () => {
  return (
    <div className="chart-container">
      <BarChart />
      <hr className="divider" />
      <div className="flex">
        <div>
          <p className="labels">Total this month</p>
          <p id="month-total-amount">$478.33</p>
        </div>
        <div id="percentage-column">
          <p id="percentage-amount">+2.4%</p>
          <p className="labels">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Spend;
