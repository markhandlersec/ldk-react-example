import React, { useEffect } from "react";
import * as ldk from "lightningdevkit";
import { FeeEstimator } from "lightningdevkit";
import YourFeeEstimator from "./YourFeeEstimator";
import { run_tests_web } from "lightningdevkit/test/tests.mjs";

const initializeClasses = () => {
  const fee_estimator = FeeEstimator.new_impl(new YourFeeEstimator());
  console.log(fee_estimator);
};

const compileWasm = (pathToWasm) => {
  const result = run_tests_web(pathToWasm);
  try {
    if (result) {
      console.log("All Tests Passed!");
    } else {
      console.log(result);
      console.log("Some Tests Failed!");
    }
  } catch (e) {
    console.log("Error occured");
    console.error(e);
  }
  // fetch(pathToWasm)
  //   .then((response) => {
  //     return response.arrayBuffer();
  //   })
  //   .then((bytes) => {
  //     ldk
  //       .initializeWasmFromBinary(bytes)
  //       .then(() => {})
  //       .catch((err) => console.error(err));
  //   });
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
