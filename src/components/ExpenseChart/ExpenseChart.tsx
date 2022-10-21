import React, { useState } from "react";
import data from "../../fixtures/data.json";
import logo from "../../images/logo.svg";
import Media from "react-media";

const ExpenseChart = () => {
  const [active, setActive] = useState<number>(-1);

  const highestValue = data.reduce((prev, current) =>
    prev.amount > current.amount ? prev : current
  );

  const handleMouseOver = (index: number) => {
    setActive(index);
  };

  const handleMouseOut = () => {
    setActive(-1);
  };

  return (
    <main>
      <div className="container">
        <div className="wrapper">
          <div className="balance-container">
            <div>
              <p id="balance-label">My balance</p>
              <p id="balance-amount">$921.48</p>
            </div>
            <div>
              <img id="logo" src={logo} alt="log" />
            </div>
          </div>

          <div className="chart-container">
            <h2 id="chart-label">Spending - Last 7 days</h2>
            {/* CHART */}
            <ul className="chart">
              {data.map((x, index) => {
                return (
                  <>
                    <li
                      key={x.day}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={handleMouseOut}
                    >
                      {active === index && (
                        <div className="hover-item">
                          <p>{`$${x.amount}`}</p>
                        </div>
                      )}
                      <Media query="(max-width: 375px)">
                        {(matches) => {
                          return matches ? (
                            <div
                              className="bar"
                              style={
                                x.amount === highestValue.amount
                                  ? {
                                      height: x.amount * 2.4,
                                    }
                                  : {
                                      height: x.amount * 2.4,
                                      backgroundColor: "hsl(10, 79%, 65%)",
                                      borderRadius: "4px",
                                      marginTop: "15px",
                                      position: "relative",
                                    }
                              }
                            />
                          ) : (
                            <div
                              className="bar"
                              style={
                                x.amount === highestValue.amount
                                  ? {
                                      height: x.amount * 2,
                                    }
                                  : {
                                      height: x.amount * 2,
                                      backgroundColor: "hsl(10, 79%, 65%)",
                                      borderRadius: "4px",
                                      marginTop: "15px",
                                      position: "relative",
                                    }
                              }
                            />
                          );
                        }}
                      </Media>
                      <div>
                        <p className="label">{x.day}</p>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>

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
        </div>
      </div>
    </main>
  );
};

export default ExpenseChart;
