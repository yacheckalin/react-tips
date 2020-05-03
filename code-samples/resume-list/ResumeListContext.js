import React from "react";

const ResumeListContext = React.createContext({
  data: [],
  sortBy: "priority",
  sortDirection: "desc",
});

export default ResumeListContext;
