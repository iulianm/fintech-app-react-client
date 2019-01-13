import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadPortfolioReturns } from "../../../actions/returnsActions";
import Stock from "./Stock";
import MultiInvestmentReturns from "./PortfolioCharts/PortfolioPrices/MultiInvestmentReturns";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      // stocks: ["aapl", "amzn", "baba", "fb", "goog", "msft"],
      stocks: { stock_1: "aapl", stock_2: "amzn", stock_3: "baba", stock_4: "fb", stock_5: "goog", stock_6: "msft" },
      portfolio_returns: [],
      minPrice: 0,
      maxPrice: 0
    };
  }

  componentDidMount() {
    console.log("Portfolio componentDidMount, we call the loadPortfolioReturns action");
    const { stocks } = this.state;
    this.props.loadPortfolioReturns(stocks);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    console.log("In compWill, returns is: ", nextProps.portfolio_returns);
    const portfolio_returns = nextProps.portfolio_returns;
    const maxPrice = nextProps.maxPrice;
    const minPrice = nextProps.minPrice;
    this.setState({ portfolio_returns, maxPrice, minPrice });
  }

  render() {
    const { portfolio_returns, stocks, maxPrice, minPrice } = this.state;

    console.log("In P, ", stocks);

    const stocksArray = Object.keys(stocks).map(function(_) {
      return stocks[_];
    });

    console.log("In P, ", stocksArray);

    const stockComponents = stocksArray.map(stock => {
      return <Stock key={stock} stock={stock} />;
    });

    console.log("P, maxDomain is ", maxPrice);
    console.log("P, minDomain is ", minPrice);

    return (
      <Fragment>
        <MultiInvestmentReturns
          returns={portfolio_returns}
          stocks={stocksArray}
          maxDomain={maxPrice}
          minDomain={minPrice}
        />
        {/* {stockComponents} */}
      </Fragment>
    );
  }
}

Portfolio.propTypes = {
  portfolio_returns: PropTypes.array.isRequired,
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  portfolio_returns: state.returns.portfolio_returns,
  maxPrice: state.returns.maxPrice,
  minPrice: state.returns.minPrice
});

export default connect(
  mapStateToProps,
  { loadPortfolioReturns }
)(Portfolio);
