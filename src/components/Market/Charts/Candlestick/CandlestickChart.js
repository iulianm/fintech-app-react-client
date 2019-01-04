import React, { Component } from "react";
import { extent, max, min } from "d3-array";
import { scaleLinear, scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import AxisBuilder from "./AxisBuilder";
import Candlestick from "../Candlestick/Candlestick";

class CandlestickChart extends Component {
  render() {
    const { data, width, height, margin } = this.props;
    const parseTime = timeParse("%m/%d/%Y %H:%M");

    const xScale = scaleTime()
      .domain(extent(data, d => parseTime(d.timestamp)))
      .range([margin.left, width - margin.right]);

    const yScale = scaleLinear()
      .domain([min(data, d => d.priceLow), max(data, d => d.priceHigh)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    return (
      <svg width={width} height={height}>
        <AxisBuilder scale={{ xScale, yScale }} margin={margin} width={width} height={height} />
        <Candlestick scale={{ xScale, yScale }} margin={margin} width={width} height={height} data={data} />
      </svg>
    );
  }
}

export default CandlestickChart;
