import React, { useEffect } from "react";
import * as ldk from "lightningdevkit";
import { FeeEstimator } from "lightningdevkit";
import YourFeeEstimator from "./YourFeeEstimator";

const compileWasm = (pathToWasm) => {
  fetch(pathToWasm)
    .then((response) => {
      return response.arrayBuffer();
    })
    .then((bytes) => {
      ldk
        .initializeWasmFromBinary(bytes)
        .then(() => {
          const fee_estimator = FeeEstimator.new_impl(new YourFeeEstimator());
          console.log(fee_estimator);
        })
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
