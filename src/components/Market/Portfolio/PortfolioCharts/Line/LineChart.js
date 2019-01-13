import React, { Component } from "react";
import { extent, max, min } from "d3-array";
import { scaleLinear, scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import AxisBuilder from "./AxisBuilder";
import Line from "./Line";

class Chart extends Component {
  render() {
    const { data, width, height, margin } = this.props;
    const parseTime = timeParse("%Y-%m-%d");

    const xScale = scaleTime()
      .domain(extent(data, d => parseTime(d.date)))
      .range([margin.left, width - margin.right]);

    const yScale = scaleLinear()
      .domain([min(data, d => d.close), max(data, d => d.close)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    return (
      <svg width={width} height={height}>
        <AxisBuilder scale={{ xScale, yScale }} margin={margin} width={width} height={height} />
        <Line scale={{ xScale, yScale }} margin={margin} data={data} />
      </svg>
    );
  }
}

export default Chart;
