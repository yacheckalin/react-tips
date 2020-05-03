import React from "react";
import PropTypes from "prop-types";

const ResumeReset = ({ onReset }) => (
  <div className="col s2">
    <a className="btn red" onClick={(e) => onReset()}>
      RESET
    </a>
  </div>
);

ResumeReset.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default ResumeReset;
