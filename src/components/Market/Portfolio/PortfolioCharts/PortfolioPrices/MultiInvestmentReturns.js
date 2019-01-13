import React, { Component, Fragment } from "react";
import LineChart from "./Line/LineChart";

class MultiInvestmentReturns extends Component {
  constructor() {
    super();
    this.state = {
      width: 900,
      height: 350,
      margin: { top: 20, right: 30, bottom: 30, left: 40 }
    };
  }

  render() {
    const { returns, maxDomain, minDomain } = this.props;
    const { width, height, margin } = this.state;
    const stocks = this.props.stocks;

    console.log("MI, maxDomain is ", maxDomain);
    console.log("MI, minDomain is ", minDomain);

    return (
      <Fragment>
        <LineChart
          data={returns}
          width={width}
          height={height}
          margin={margin}
          stocks={stocks}
          maxDomain={maxDomain}
          minDomain={minDomain}
        />
      </Fragment>
    );
  }
}

export default MultiInvestmentReturns;
