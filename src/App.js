import React, { useEffect } from "react";
import * as ldk from "lightningdevkit";
import {
  FeeEstimator,
  Logger,
  BroadcasterInterface,
  Persist,
} from "lightningdevkit";
import YourFeeEstimator from "./init/YourFeeEstimator";
import YourLogger from "./init/YourLogger";
import YourBroadcaster from "./init/YourBroadcaster";
import initNetworkGraph from "./init/NetworkGraph";
import YourPersister from "./init/YourPersister";
// import YourObj from "./init/YourObj";
import { run_tests_web } from "lightningdevkit/test/tests.mjs";

const initializeClasses = () => {
  const fee_estimator = FeeEstimator.new_impl(new YourFeeEstimator());
  console.log(fee_estimator);
  const logger = Logger.new_impl(new YourLogger());
  console.log(logger);
  const broadcaster = BroadcasterInterface.new_impl(new YourBroadcaster());
  console.log(broadcaster);
  const networkGraph = initNetworkGraph();
  console.log(networkGraph);
  const persister = Persist.new_impl(new YourPersister());
  console.log(persister);
  // const customEventHandler = new YourObj();
  // console.log(customEventHandler);
};

const runTests = (pathToWasm) => {
  const result = run_tests_web(pathToWasm);
  try {
    if (result) {
      console.log("All Tests Passed!");
    } else {
      console.log("Some Tests Failed!");
      console.log(result);
    }
  } catch (e) {
    console.log("Error occured");
    console.error(e);
  }
};

const compileWasm = (pathToWasm) => {
  fetch(pathToWasm)
    .then((response) => {
      return response.arrayBuffer();
    })
    .then((bytes) => {
      ldk
        .initializeWasmFromBinary(bytes)
        .then(() => {
          initializeClasses();
        })
        .catch((err) => console.error(err));
    });
};

const App = () => {
  useEffect(async () => {
    compileWasm("liblightningjs.wasm");
    // runTests("liblightningjs.wasm");
  });

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
