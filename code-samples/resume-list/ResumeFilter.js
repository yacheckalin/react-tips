import React from "react";
import PropTypes from "prop-types";

const ResumeFilter = ({ onFilter }) => {
  return (
    <div className="row">
      <div className="col s7 input-field">
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
    </div>
  );
};

ResumeFilter.propTypes = {
  onFilter: PropTypes.func.required,
};
export default ResumeFilter;
