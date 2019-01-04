import React, { Component, Fragment } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import StockPrice from "./StockPrice";
import MarketDashboard from "./MarketDashboard";

var stompClient = null;

class Market extends Component {
  constructor() {
    super();

    this.state = {
      marketConnected: false,
      LivePriceAAPL: 1,
      LivePriceMSFT: 2,
      LivePriceFB: 3,
      LivePriceAMZN: 4,
      LivePriceGOOG: 5,
      LivePriceBABA: 6,
      AAPL: [],
      MSFT: [],
      FB: [],
      AMZN: [],
      GOOG: [],
      BABA: []
    };

    this.connectSocket = this.connectSocket.bind(this);
    this.socketConnectCallback = this.socketConnectCallback.bind(this);
    this.stompSubscribeCallback = this.stompSubscribeCallback.bind(this);
    this.distributeStockPrices = this.distributeStockPrices.bind(this);
  }

  componentWillMount() {
    this.connectSocket();
  }

  connectSocket() {
    const sock = new SockJS("http://192.168.99.100:8091/market-start");

    stompClient = Stomp.over(sock);
    stompClient.connect(
      {},
      this.socketConnectCallback
    );
    if (stompClient != null) {
      this.setState({ marketConnected: true });
    }
  }

  socketConnectCallback() {
    stompClient.subscribe("/topic/market-price", this.stompSubscribeCallback);
  }

  stompSubscribeCallback(message) {
    this.distributeStockPrices(JSON.parse(message.body));
  }

  distributeStockPrices(message) {
    switch (message.stockSymbol) {
      case "AAPL":
        this.setState({
          AAPL: [...this.state.AAPL, message],
          LivePriceAAPL: message.priceClose
        });
        console.log(this.state.AAPL);
        break;
      case "AMZN":
        this.setState({
          AMZN: [...this.state.AMZN, message],
          LivePriceAMZN: message.priceClose
        });
        break;
      case "BABA":
        this.setState({
          BABA: [...this.state.BABA, message],
          LivePriceBABA: message.priceClose
        });
        break;
      case "FB":
        this.setState({
          FB: [...this.state.FB, message],
          LivePriceFB: message.priceClose
        });
        break;
      case "GOOG":
        this.setState({
          GOOG: [...this.state.GOOG, message],
          LivePriceGOOG: message.priceClose
        });
        break;
      case "MSFT":
        this.setState({
          MSFT: [...this.state.MSFT, message],
          LivePriceMSFT: message.priceClose
        });
        break;
      default:
    }
  }

  render() {
    return (
      <Fragment>
        <div>This is the Market Component</div>
        <StockPrice stock="AMZN" livePrice={this.state.LivePriceAMZN} />
        <StockPrice stock="BABA" livePrice={this.state.LivePriceBABA} />
        <StockPrice stock="FB" livePrice={this.state.LivePriceFB} />
        <StockPrice stock="GOOG" livePrice={this.state.LivePriceGOOG} />
        <StockPrice stock="MSFT" livePrice={this.state.LivePriceMSFT} />
        <MarketDashboard />
      </Fragment>
    );
  }
}

export default Market;
