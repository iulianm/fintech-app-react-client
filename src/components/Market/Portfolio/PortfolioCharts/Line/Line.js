import React, { Component } from "react";
import { line } from "d3-shape";
import { timeParse } from "d3-time-format";

class Line extends Component {
  render() {
    const { scale, data } = this.props;
    const { xScale, yScale } = scale;
    const parseTime = timeParse("%Y-%m-%d");

    const lineGraph = line()
      .x(d => {
        return xScale(parseTime(d.date));
      })
      .y(d => {
        return yScale(d.close);
      });

    const path = <path d={lineGraph(data)} />;

    return <g>{path}</g>;
  }
}
export default Line;
