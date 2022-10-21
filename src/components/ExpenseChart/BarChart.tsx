import React, { useState } from "react";

import data from "../../fixtures/data.json";
import Media from "react-media";

const BarChart = () => {
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
    <>
      <h2 id="chart-label">Spending - Last 7 days</h2>
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
    </>
  );
};

export default BarChart;
