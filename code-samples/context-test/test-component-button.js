import React from "react";
import { useTestContext } from "./test-context-provider";
import { generateRandomArray } from "./helpers";

const TestComponentButton = () => {
  const { setData } = useTestContext();

  return (
    <a className="btn green" onClick={(e) => setData(generateRandomArray(15))}>
      Update Data
    </a>
  );
};

export default TestComponentButton;
