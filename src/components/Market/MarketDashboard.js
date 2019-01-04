import React, { Component, Fragment } from "react";
// import PieChartBasic from "./Charts/PieChartBasic";
// import PieChartData from "./Charts/PieChartData";
// import PieChartResponsive from "./Charts/PieChartResponsive";
import LineChart from "./Charts/Line/LineChart";
import CandlestickChart from "./Charts/Candlestick/CandlestickChart";

class MarketDashboard extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: null,
      data_pie: [
        { label: "<5", value: 2704659, color: "#98abc5" },
        { label: "5-13", value: 4499890, color: "#8a89a6" },
        { label: "14-17", value: 2159981, color: "#7b6888" },
        { label: "18-24", value: 3853788, color: "#6b486b" },
        { label: "25-44", value: 14106543, color: "#a05d56" },
        { label: "45-64", value: 8819342, color: "#d0743c" },
        { label: "≥65", value: 612463, color: "#ff8c00" }
      ],
      data_AAPL: [
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:45",
          priceOpen: 165.69,
          priceHigh: 165.73,
          priceLow: 165.53,
          priceClose: 165.55,
          volume: 123634
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:46",
          priceOpen: 165.62,
          priceHigh: 165.7,
          priceLow: 165.47,
          priceClose: 165.54,
          volume: 118506
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:47",
          priceOpen: 165.62,
          priceHigh: 165.64,
          priceLow: 165.56,
          priceClose: 165.59,
          volume: 101555
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:48",
          priceOpen: 165.68,
          priceHigh: 165.83,
          priceLow: 165.64,
          priceClose: 165.71,
          volume: 224416
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:49",
          priceOpen: 165.69,
          priceHigh: 165.8,
          priceLow: 165.54,
          priceClose: 165.63,
          volume: 134084
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:50",
          priceOpen: 165.65,
          priceHigh: 165.67,
          priceLow: 165.49,
          priceClose: 165.65,
          volume: 82795
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:51",
          priceOpen: 165.61,
          priceHigh: 165.64,
          priceLow: 165.48,
          priceClose: 165.52,
          volume: 120619
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:52",
          priceOpen: 165.55,
          priceHigh: 165.75,
          priceLow: 165.5,
          priceClose: 165.68,
          volume: 91776
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:53",
          priceOpen: 165.73,
          priceHigh: 165.8,
          priceLow: 165.67,
          priceClose: 165.79,
          volume: 99698
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:54",
          priceOpen: 165.8,
          priceHigh: 165.8,
          priceLow: 165.65,
          priceClose: 165.72,
          volume: 109410
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:55",
          priceOpen: 165.71,
          priceHigh: 165.8,
          priceLow: 165.63,
          priceClose: 165.68,
          volume: 112524
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:56",
          priceOpen: 165.74,
          priceHigh: 166.08,
          priceLow: 165.74,
          priceClose: 165.97,
          volume: 184975
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:57",
          priceOpen: 166.07,
          priceHigh: 166.07,
          priceLow: 165.88,
          priceClose: 165.97,
          volume: 128257
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:58",
          priceOpen: 165.95,
          priceHigh: 166.0,
          priceLow: 165.89,
          priceClose: 165.92,
          volume: 71254
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 9:59",
          priceOpen: 165.93,
          priceHigh: 166.08,
          priceLow: 165.91,
          priceClose: 166.03,
          volume: 93305
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:00",
          priceOpen: 166.05,
          priceHigh: 166.18,
          priceLow: 166.0,
          priceClose: 166.03,
          volume: 141106
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:01",
          priceOpen: 165.94,
          priceHigh: 166.06,
          priceLow: 165.87,
          priceClose: 165.87,
          volume: 105213
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:02",
          priceOpen: 165.87,
          priceHigh: 165.91,
          priceLow: 165.7,
          priceClose: 165.74,
          volume: 78676
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:03",
          priceOpen: 165.71,
          priceHigh: 165.8,
          priceLow: 165.64,
          priceClose: 165.73,
          volume: 63289
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:04",
          priceOpen: 165.69,
          priceHigh: 165.69,
          priceLow: 165.57,
          priceClose: 165.6,
          volume: 62829
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:05",
          priceOpen: 165.58,
          priceHigh: 165.67,
          priceLow: 165.53,
          priceClose: 165.53,
          volume: 88306
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:06",
          priceOpen: 165.55,
          priceHigh: 165.57,
          priceLow: 165.41,
          priceClose: 165.56,
          volume: 124324
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:07",
          priceOpen: 165.62,
          priceHigh: 165.85,
          priceLow: 165.62,
          priceClose: 165.64,
          volume: 97985
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:08",
          priceOpen: 165.6,
          priceHigh: 165.76,
          priceLow: 165.6,
          priceClose: 165.68,
          volume: 55751
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:09",
          priceOpen: 165.67,
          priceHigh: 165.75,
          priceLow: 165.57,
          priceClose: 165.6,
          volume: 61382
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:10",
          priceOpen: 165.58,
          priceHigh: 165.58,
          priceLow: 165.45,
          priceClose: 165.45,
          volume: 73944
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:11",
          priceOpen: 165.44,
          priceHigh: 165.52,
          priceLow: 165.36,
          priceClose: 165.38,
          volume: 93170
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:12",
          priceOpen: 165.34,
          priceHigh: 165.38,
          priceLow: 165.27,
          priceClose: 165.27,
          volume: 74557
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:13",
          priceOpen: 165.24,
          priceHigh: 165.54,
          priceLow: 165.23,
          priceClose: 165.54,
          volume: 81702
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:14",
          priceOpen: 165.51,
          priceHigh: 165.6,
          priceLow: 165.47,
          priceClose: 165.6,
          volume: 76061
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:15",
          priceOpen: 165.64,
          priceHigh: 165.81,
          priceLow: 165.64,
          priceClose: 165.8,
          volume: 90370
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:16",
          priceOpen: 165.84,
          priceHigh: 166.0,
          priceLow: 165.84,
          priceClose: 165.88,
          volume: 208466
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:17",
          priceOpen: 165.87,
          priceHigh: 166.0,
          priceLow: 165.84,
          priceClose: 165.91,
          volume: 48856
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:18",
          priceOpen: 165.87,
          priceHigh: 165.87,
          priceLow: 165.78,
          priceClose: 165.78,
          volume: 46633
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:19",
          priceOpen: 165.77,
          priceHigh: 165.81,
          priceLow: 165.66,
          priceClose: 165.79,
          volume: 77554
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:20",
          priceOpen: 165.83,
          priceHigh: 165.99,
          priceLow: 165.8,
          priceClose: 165.99,
          volume: 90969
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:21",
          priceOpen: 166.01,
          priceHigh: 166.09,
          priceLow: 165.83,
          priceClose: 165.85,
          volume: 91247
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:22",
          priceOpen: 165.91,
          priceHigh: 165.91,
          priceLow: 165.62,
          priceClose: 165.62,
          volume: 75617
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:23",
          priceOpen: 165.68,
          priceHigh: 165.73,
          priceLow: 165.65,
          priceClose: 165.7,
          volume: 38637
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:24",
          priceOpen: 165.74,
          priceHigh: 165.82,
          priceLow: 165.71,
          priceClose: 165.72,
          volume: 51342
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:25",
          priceOpen: 165.76,
          priceHigh: 165.98,
          priceLow: 165.7,
          priceClose: 165.98,
          volume: 59000
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:26",
          priceOpen: 165.92,
          priceHigh: 166.03,
          priceLow: 165.88,
          priceClose: 166.03,
          volume: 119351
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:27",
          priceOpen: 166.0,
          priceHigh: 166.02,
          priceLow: 165.86,
          priceClose: 165.97,
          volume: 46306
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:28",
          priceOpen: 165.97,
          priceHigh: 166.25,
          priceLow: 165.97,
          priceClose: 166.25,
          volume: 277899
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:29",
          priceOpen: 166.25,
          priceHigh: 166.26,
          priceLow: 166.15,
          priceClose: 166.18,
          volume: 110974
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:30",
          priceOpen: 166.2,
          priceHigh: 166.22,
          priceLow: 165.95,
          priceClose: 166.05,
          volume: 94948
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:31",
          priceOpen: 166.09,
          priceHigh: 166.16,
          priceLow: 166.04,
          priceClose: 166.11,
          volume: 40048
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:32",
          priceOpen: 166.09,
          priceHigh: 166.15,
          priceLow: 166.01,
          priceClose: 166.03,
          volume: 44666
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:33",
          priceOpen: 166.11,
          priceHigh: 166.31,
          priceLow: 166.1,
          priceClose: 166.1,
          volume: 130637
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:34",
          priceOpen: 166.08,
          priceHigh: 166.12,
          priceLow: 165.99,
          priceClose: 166.02,
          volume: 92558
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:35",
          priceOpen: 166.0,
          priceHigh: 166.06,
          priceLow: 165.92,
          priceClose: 165.97,
          volume: 53654
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:36",
          priceOpen: 165.94,
          priceHigh: 166.14,
          priceLow: 165.74,
          priceClose: 165.76,
          volume: 129189
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:37",
          priceOpen: 165.77,
          priceHigh: 165.94,
          priceLow: 165.77,
          priceClose: 165.82,
          volume: 67553
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:38",
          priceOpen: 165.82,
          priceHigh: 165.9,
          priceLow: 165.69,
          priceClose: 165.8,
          volume: 61380
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:39",
          priceOpen: 165.8,
          priceHigh: 165.99,
          priceLow: 165.8,
          priceClose: 165.86,
          volume: 48944
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:40",
          priceOpen: 165.9,
          priceHigh: 166.0,
          priceLow: 165.84,
          priceClose: 166.0,
          volume: 59464
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:41",
          priceOpen: 166.04,
          priceHigh: 166.04,
          priceLow: 165.93,
          priceClose: 165.99,
          volume: 41384
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:42",
          priceOpen: 165.89,
          priceHigh: 165.94,
          priceLow: 165.7,
          priceClose: 165.7,
          volume: 64952
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:43",
          priceOpen: 165.71,
          priceHigh: 165.71,
          priceLow: 165.46,
          priceClose: 165.53,
          volume: 114340
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:44",
          priceOpen: 165.63,
          priceHigh: 165.66,
          priceLow: 165.38,
          priceClose: 165.38,
          volume: 48951
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:45",
          priceOpen: 165.4,
          priceHigh: 165.43,
          priceLow: 165.36,
          priceClose: 165.38,
          volume: 78283
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:46",
          priceOpen: 165.37,
          priceHigh: 165.37,
          priceLow: 165.16,
          priceClose: 165.33,
          volume: 95192
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:47",
          priceOpen: 165.32,
          priceHigh: 165.43,
          priceLow: 165.24,
          priceClose: 165.36,
          volume: 102349
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:48",
          priceOpen: 165.36,
          priceHigh: 165.4,
          priceLow: 165.18,
          priceClose: 165.18,
          volume: 111120
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:49",
          priceOpen: 165.17,
          priceHigh: 165.34,
          priceLow: 165.12,
          priceClose: 165.32,
          volume: 70347
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:50",
          priceOpen: 165.28,
          priceHigh: 165.43,
          priceLow: 165.2,
          priceClose: 165.43,
          volume: 69900
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:51",
          priceOpen: 165.41,
          priceHigh: 165.57,
          priceLow: 165.41,
          priceClose: 165.48,
          volume: 76669
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:52",
          priceOpen: 165.51,
          priceHigh: 165.75,
          priceLow: 165.51,
          priceClose: 165.74,
          volume: 67431
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:53",
          priceOpen: 165.69,
          priceHigh: 165.71,
          priceLow: 165.61,
          priceClose: 165.61,
          volume: 59911
        },
        {
          stockName: "Apple",
          stockSymbol: "AAPL",
          timestamp: "12/18/2018 10:54",
          priceOpen: 165.57,
          priceHigh: 165.61,
          priceLow: 165.49,
          priceClose: 165.49,
          volume: 86880
        }
      ],
      width: 600,
      height: 350,
      margin: { top: 20, right: 30, bottom: 30, left: 40 }
    };
  }

  setCurrentIndex = currentIndex =>
    this.setState({
      currentIndex
    });
  render() {
    const { data_AAPL } = this.state;
    const { width, height } = this.state;
    const { margin } = this.state;

    return (
      <Fragment>
        <div>Market Dashboard</div>
        <LineChart data={data_AAPL} width={width} height={height} margin={margin} />
        <CandlestickChart data={data_AAPL} width={width} height={height} margin={margin} />
      </Fragment>
    );
  }
}
export default MarketDashboard;
