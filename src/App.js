import React from "react";
import * as ldk from "lightningdevkit";

const App = () => {
  ldk.initializeWasmFromBinary(
    "node_modules/lightningdevkit/liblightningjs.wasm"
  );
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
