import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Market from "./components/Market/Market";
import Portfolio from "./components/Market/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/live-market" component={Market} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
