import React, { useEffect } from "react";
import * as ldk from "lightningdevkit";
import { ConfirmationTarget, FeeEstimator } from "lightningdevkit";

const initializeFeeEstimator = () => {
  let feeEstimator = FeeEstimator.new_impl(new FeeEstimator());
  console.log(feeEstimator);
};

const compileWasm = (pathToWasm) => {
  fetch(pathToWasm)
    .then((response) => {
      return response.arrayBuffer();
    })
    .then((bytes) => {
      ldk
        .initializeWasmFromBinary(bytes)
        .then(() => initializeFeeEstimator())
        .catch((err) => console.error(err));
    });
};

const App = () => {
  useEffect(async () => {
    compileWasm("liblightningjs.wasm");
  });

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
