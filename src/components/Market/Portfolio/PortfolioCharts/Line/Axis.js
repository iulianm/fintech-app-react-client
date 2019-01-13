import React, { Component } from "react";
import * as d3Axis from "d3-axis";
import { select as d3Select } from "d3-selection";
import "./Axis.css";

export default class Axis extends Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    var axis = {};
    if (this.props.type === "scaleLinear") {
      const axisType = `axis${this.props.orient}`;
      axis = d3Axis[axisType]()
        .scale(this.props.scale)
        .tickSize(-this.props.tickSize)
        .tickPadding([12])
        .ticks([20]);
    } else if (this.props.type === "scaleTime") {
      const axisType = `axis${this.props.orient}`;
      axis = d3Axis[axisType]().scale(this.props.scale);
      // .tickFormat(this.props.tickFormat)
      // .tickSize(-this.props.tickSize)
      // .tickPadding([5])
      // .ticks(25);
      // .tickSizeOuter(10);
    }
    d3Select(this.axisElement).call(axis);
  }

  render() {
    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={el => {
          this.axisElement = el;
        }}
        transform={this.props.translate}
      />
    );
  }
}
