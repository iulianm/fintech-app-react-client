import React, { Component } from "react";
import { extent, max, min } from "d3-array";
import { scaleLinear, scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import AxisBuilder from "./AxisBuilder";
import Lines from "./Lines";

class Chart extends Component {
  render() {
    const { data, width, height, margin, stocks, maxDomain, minDomain } = this.props;
    const parseTime = timeParse("%Y-%m-%d");

    const xScale = scaleTime()
      .domain(extent(data, d => parseTime(d.date)))
      .range([margin.left, width - margin.right]);
    console.log("LineChart, maxDomain is ", maxDomain);
    console.log("LineChart, minDomain is ", minDomain);
    const yScale = scaleLinear()
      // .domain([min(data, d => d.amzn_close), max(data, d => d.amzn_close)])
      .domain([minDomain, maxDomain])
      .nice()
      .range([height - margin.bottom, margin.top]);

    return (
      <svg width={width} height={height}>
        <AxisBuilder scale={{ xScale, yScale }} margin={margin} width={width} height={height} />
        <Lines scale={{ xScale, yScale }} margin={margin} data={data} stocks={stocks} />
      </svg>
    );
  }
}

export default Chart;
