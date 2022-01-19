import { Logger } from "lightningdevkit";

class YourLogger extends Logger {
  log(record) {
    // <insert code to print this log and/or write this log to a file>
  }
}

export default YourLogger;
