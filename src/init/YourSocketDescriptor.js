import { SocketDescriptor } from "lightningdevkit";

class YourSocketDescriptor extends SocketDescriptor {
  send_data(data, resume_read) {
    console.log("send_data has fired off successfully. DATA: " + data);
    console.log(data);
    let socket = new WebSocket("ws://127.0.0.1:8080/proxy");
    socket.onopen = (e) => {
      console.log("websocket connection established! :) ");
      socket.send(data);
    };

    socket.onerror = (e) => {
      console.log("websocket connection failed: " + e.message);
    };
  }

  disconnect_socket() {
    // not to sure what we are going to do here
  }

  eq() {
    // need too sure what we are going to do here to
  }

  hash() {
    // not too sure what we are going to do here
  }
}
export default YourSocketDescriptor;
