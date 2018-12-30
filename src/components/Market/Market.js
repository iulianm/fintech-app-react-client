import React, { Component } from "react";
import websocket from "../../utils/websocket";

class Market extends Component {
  componentWillMount() {
    websocket.connect();
  }

  render() {
    return <div />;
  }
}

export default Market;
