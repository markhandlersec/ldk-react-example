import { SocketDescriptor } from "lightningdevkit";

class YourSocketDescriptor extends SocketDescriptor {
  send_data(data, resume_read) {
    console.log(data);
    let result;
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        result = json;
      });
    return result;
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
