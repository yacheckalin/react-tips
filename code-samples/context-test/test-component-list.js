import React, { useContext, useEffect } from "react";
import { TestContext } from "./test-context-provider";

const TestComponentList = () => {
  const { data } = useContext(TestContext);

  return (
    <div className="col s4">
      <ul className="collection">
        {data.map((item, index) => (
          <li className="collection-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponentList;
