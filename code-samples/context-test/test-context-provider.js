import React, { useState, useContext } from "react";

export const TestContext = React.createContext();
export const useTestContext = () => useContext(TextContext);

const TestContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TestContext.Provider value={{ data, setData }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
