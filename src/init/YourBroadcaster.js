import { BroadcasterInterface } from "lightningdevkit";

class YourBroadcaster extends BroadcasterInterface {
  broadcast_transaction(tx) {
    // <insert code to broadcast the given transaction here>
  }
}

export default YourBroadcaster;
