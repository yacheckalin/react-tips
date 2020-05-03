import React from "react";

import { PRIORITY_HIGH, PRIORITY_MIDDLE, PRIORITY_LOW } from "./constants";

const ResumeListContext = React.createContext({
  data: [],
  sortBy: "priority",
  sortDirection: "desc",
  filterPriorities: [1, 1, 1],
  search: "",
});

export default ResumeListContext;
