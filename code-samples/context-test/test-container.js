import React from "react";
import TestComponentList from "./test-component-list";
import TestComponentButton from "./test-component-button";
import TestContextProvider from "./test-context-provider";

const TestContainer = () => {
  return (
    <TestContextProvider>
      <div className="container">
        <div className="row">
          <TestComponentList />
          <TestComponentButton />
        </div>
      </div>
    </TestContextProvider>
  );
};

export default TestContainer;
