import logo from "../../images/logo.svg";
import Balance from "./Balance";
import Spend from "./Spend";

const ExpenseChart = () => {
  return (
    <main>
      <div className="container">
        <div className="wrapper">
          <Balance logo={logo} />
          <Spend />
        </div>
      </div>
    </main>
  );
};

export default ExpenseChart;
