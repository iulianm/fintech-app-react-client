import React, { Component, Fragment } from "react";

export default class Return extends Component {
  render() {
    console.log("Returns is: ", this.props.type);
    const { returns } = this.props;
    return (
      <Fragment>
        <div>{returns.simple_return ? returns.simple_return : returns.logarithmic_return}</div>
        {/* <div>{returns.logarithmic_return}</div> */}
      </Fragment>
    );
  }
}
