// import React, { useState } from "react";
// import data from "../../fixtures/data.json";
import logo from "../../images/logo.svg";
import Balance from "./Balance";
import Spend from "./Spend";

// import Media from "react-media";

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
