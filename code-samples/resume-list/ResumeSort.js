import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import ResumeListContext from "./ResumeListContext";

import { mapSortByToDefaultValue, mapStateToSortObject } from "./helpers";

const ResumeSort = ({ onSort }) => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  const context = useContext(ResumeListContext);

  const { sortBy, sortDirection } = context;
  const [defaultValue, setDefaultValue] = useState(
    mapSortByToDefaultValue(sortBy, sortDirection)
  );

  return (
    <div className="input-field col s3 ">
      <select
        defaultValue={defaultValue}
        onChange={(e) => {
          onSort(mapStateToSortObject(e.target.value));
        }}
      >
        <option value="1">Priority &#x2191;</option>
        <option value="2">Priority &#x2193;</option>
      </select>
      <label>Sort By:</label>
    </div>
  );
};

ResumeSort.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default ResumeSort;
