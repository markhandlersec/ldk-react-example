import { Persist } from "lightningdevkit";

class YourPersister extends Persist {
  persist_new_channel(id, data) {
    const channel_monitor_bytes = data.write();
    // <insert code to write these bytes to disk, keyed by `id`>
  }

  update_persisted_channel(id, update, data) {
    const channel_monitor_bytes = data.write();
    // <insert code to update the `ChannelMonitor`'s file on disk with these
    //  new bytes, keyed by `id`>
  }
}

export default YourPersister;
