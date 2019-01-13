import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSimpleReturns, getLogarithmicReturns } from "../../../actions/returnsActions";
// import Return from "./Return";
import LineChart from "./PortfolioCharts/Line/LineChart";

class Stock extends Component {
  constructor() {
    super();
    this.state = {
      simple_returns: [],
      logarithmic_returns: [],
      errors: {},
      width: 600,
      height: 350,
      margin: { top: 20, right: 30, bottom: 30, left: 40 }
    };
  }

  componentDidMount() {
    // const { id } = this.props.match.params;
    const stock = this.props.stock;
    console.log("In Stock, this.props.stock is --> ", this.props.stock);
    this.props.getSimpleReturns(stock);
    this.props.getLogarithmicReturns(stock);
    console.log("In Stock, the state is: ", this.state);
  }

  componentWillReceiveProps(nextProps) {
    console.log("In Stock, compWill was called");
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const simple_returns = nextProps.simple_returns;
    const logarithmic_returns = nextProps.logarithmic_returns;
    this.setState({ simple_returns, logarithmic_returns });
  }

  render() {
    const { simple_returns, logarithmic_returns } = this.state;
    const { width, height, margin } = this.state;
    console.log("In Stock render, simple_returns is: ", simple_returns);
    return (
      <Fragment>
        <div>{this.props.stock} </div>
        <LineChart data={simple_returns} width={width} height={height} margin={margin} />
      </Fragment>
    );
  }
}

Stock.propTypes = {
  simple_returns: PropTypes.array.isRequired,
  logarithmic_returns: PropTypes.array.isRequired,
  getSimpleReturns: PropTypes.func.isRequired,
  getLogarithmicReturns: PropTypes.func.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  simple_returns: state.returns.simple_returns,
  logarithmic_returns: state.returns.logarithmic_returns,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getSimpleReturns, getLogarithmicReturns }
)(Stock);
