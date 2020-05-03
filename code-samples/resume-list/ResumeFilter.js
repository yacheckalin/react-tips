import React from "react";
import PropTypes from "prop-types";

const ResumeFilter = ({ onFilter }) => {
  return (
    <div className="col s4 input-field">
      <span className="prefix">
        <i className="material-icons green-text">search</i>
      </span>
      <input
        type="text"
        className="validate"
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

ResumeFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
export default ResumeFilter;
