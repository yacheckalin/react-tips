import React, { useContext } from "react";
import PropTypes from "prop-types";
import ResumeListContext from "./ResumeListContext";

const ResumeSearch = ({ onSearch }) => {
  const { search } = useContext(ResumeListContext);
  return (
    <div className="col s4 input-field">
      <span className="prefix">
        <i className="material-icons green-text">search</i>
      </span>
      <input
        type="text"
        className="validate"
        value={search}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};

ResumeSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default ResumeSearch;
