import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Market from "./components/Market/Market";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/market" component={Market} />
        </div>
      </Router>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import SockJS from "sockjs-client";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       messages: []
//     };

//     //create a new socket connection
//     //see documentation https://github.com/sockjs/sockjs-client#getting-started
//     const sock = new SockJS("http://localhost:8091/market-start");

//     var stompClient = null;

//     sock.onopen = () => {
//       console.log("connection to server open");
//       stompClient = Stomp.over(socket);
//       stompClient.connect(
//         {},
//         function(frame) {
//           setConnected(true);
//           console.log("Connected: " + frame);
//           stompClient.subscribe("/topic/user", function(greeting) {
//             showGreeting(JSON.parse(greeting.body).content);
//           });
//         }
//       );
//     };

//     sock.onmessage = e => {
//       console.log("Message received is: ", e.data);
//       this.setState({ messages: [e.data, ...this.state.messages] });
//     };

//     sock.onclose = () => {
//       console.log("close");
//     };

//     this.sock = sock;

//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }

//   handleFormSubmit(e) {
//     e.preventDefault();
//     this.sock.send(e.target[0].value);
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <form onSubmit={this.handleFormSubmit}>
//             <input type="text" placeholder="Type here to chat..." />
//             <button type="submit">Send</button>
//           </form>
//           {this.state.messages.map((message, index) => {
//             return <div key={index}>{message}</div>;
//           })}
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
