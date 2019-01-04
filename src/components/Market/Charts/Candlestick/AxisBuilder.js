import React from "react";
import Axis from "./Axis";
import { timeParse } from "d3-time-format";

export default ({ scale, margin, width, height }) => {
  const xProps = {
    orient: "Bottom",
    type: "scaleTime",
    scale: scale.xScale,
    translate: `translate(0, ${height - margin.bottom})`,
    tickFormat: timeParse("%m/%d/%Y %H:%M"),
    tickSize: height - margin.top - margin.bottom
  };

  const yProps = {
    orient: "Left",
    type: "scaleLinear",
    scale: scale.yScale,
    translate: `translate(${margin.left}, 0)`,
    tickSize: width - margin.left - margin.right
  };

  return (
    <g>
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  );
};
