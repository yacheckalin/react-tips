import React, { useContext } from "react";
import { TestContext } from "./test-context-provider";
import { generateRandomArray } from "./helpers";

const TestComponentButton = () => {
  const { setData } = useContext(TestContext);

  return (
    <a className="btn green" onClick={(e) => setData(generateRandomArray(15))}>
      Update Data
    </a>
  );
};

export default TestComponentButton;
