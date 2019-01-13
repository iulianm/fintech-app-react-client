import React, { Component, Fragment } from "react";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import Line from "./Line";
import "./Chart.css";

class Lines extends Component {
  render() {
    const { scale, data, margin, stocks } = this.props;
    const { xScale, yScale } = scale;

    var colorScale = scaleOrdinal(schemeCategory10);

    const lines = stocks.map(stock => (
      <Line
        key={stock}
        scale={{ xScale, yScale }}
        margin={margin}
        data={data}
        stock={stock}
        stroke={colorScale(stock)}
      />
    ));

    return (
      <Fragment>
        <g>{lines}</g>
      </Fragment>
    );
  }
}
export default Lines;
