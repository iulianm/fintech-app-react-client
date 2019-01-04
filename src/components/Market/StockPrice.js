import React, { Component, Fragment } from "react";
import classnames from "classnames";

class StockPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceChanged: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.livePrice !== this.props.livePrice) {
      this.setState({ priceChanged: true });
    } else {
      this.setState({ priceChanged: false });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="stock-price">
          <div className="ticket">{this.props.stock}</div>
          <div className={classnames("live-price", { blink: this.state.priceChanged })}>
            {this.props.livePrice.toLocaleString()}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StockPrice;
