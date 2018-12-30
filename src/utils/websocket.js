import SockJS from "sockjs-client";
import Stomp from "stompjs";

var stompClient = null;

function connect() {
  const sock = new SockJS("http://192.168.99.100:8091/market-start");
  console.log("Connection Socket is: ", sock);

  stompClient = Stomp.over(sock);
  stompClient.connect(
    {},
    function(frame) {
      //setConnected(true);
      console.log("Connected: " + frame);
      stompClient.subscribe("/topic/market-price", function(message) {
        console.log(JSON.parse(message.body).content);
      });
      console.log("Activate Sock-send");
      stompClient.send("ws://192.168.99.100:8091/topic/market", {}, "HARBUZ");
    }
  );
}

function sendMessage() {
  console.log("Activate Sock-send");
  stompClient.send(
    "http://localhost:8091/app/market",
    {},
    {
      stockName: "Scheduler Ltd",
      stockSymbol: "UHU",
      priceOpen: 88,
      priceHigh: 85,
      priceLow: 82,
      priceClose: 87,
      volume: 3000.0,
      timestamp: "12-31-1969T23:59"
    }
  );
}

// sock.onopen = () => {
//   console.log("connection to server open");
// };

// sock.onmessage = e => {
//   // this.setState({ messages: [e.data, ...this.state.messages] });
//   console.log("Message --> ", e);
// };

// sock.onclose = () => {
//   console.log("close");
// };

// function disconnect() {
//   if (stompClient !== null) {
//     stompClient.disconnect();
//   }
//   setConnected(false);
//   console.log("Disconnected");
// }

// function sendName() {
//   stompClient.send("/app/user", {}, JSON.stringify({ name: $("#name").val() }));
// }

export default { connect, sendMessage };
