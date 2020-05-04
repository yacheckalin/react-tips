import React, { useState } from "react";

export const TestContext = React.createContext();

const TestContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TestContext.Provider value={{ data, setData }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
