import React, { Component, Fragment } from "react";
import { scaleLinear } from "d3-scale";
import { timeParse } from "d3-time-format";
import { interpolateLab } from "d3-interpolate";
import { max, min } from "d3-array";
import { line } from "d3-shape";

export default class Bars extends Component {
  render() {
    const { scale, margin, data, width, height } = this.props;
    const { xScale, yScale } = scale;
    const parseTime = timeParse("%m/%d/%Y %H:%M");

    const lines = data.map(d => (
      <line
        key={d.timestamp}
        x1={xScale(parseTime(d.timestamp)) + 3}
        x2={xScale(parseTime(d.timestamp)) + 3}
        y1={yScale(d.priceHigh)}
        y2={yScale(d.priceLow)}
        stroke={d.priceOpen > d.priceClose ? "red" : "green"}
        stroke-width={1}
      />
    ));

    const bars = data.map(d => (
      <rect
        key={d.timestamp}
        x={xScale(parseTime(d.timestamp))}
        y={yScale(max([d.priceOpen, d.priceClose]))}
        height={yScale(min([d.priceOpen, d.priceClose])) - yScale(max([d.priceOpen, d.priceClose]))}
        width={6}
        fill={d.priceOpen > d.priceClose ? "red" : "green"}
        fill-opacity={1}
      />
    ));

    return (
      <Fragment>
        <g>{bars}</g>
        <g>{lines}</g>
      </Fragment>
    );
  }
}
