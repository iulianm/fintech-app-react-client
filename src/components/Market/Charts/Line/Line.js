import React, { Component } from "react";
import { line } from "d3-shape";
import { timeParse } from "d3-time-format";

class Line extends Component {
  render() {
    const { scale, data } = this.props;
    const { xScale, yScale } = scale;
    const parseTime = timeParse("%m/%d/%Y %H:%M");

    const lineGraph = line()
      .x(d => {
        return xScale(parseTime(d.timestamp));
      })
      .y(d => {
        return yScale(d.priceClose);
      });

    const path = <path d={lineGraph(data)} />;

    return <g>{path}</g>;
  }
}
export default Line;
