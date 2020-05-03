import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import ResumeListContext from "./ResumeListContext";
import { PRIORITY_HIGH, PRIORITY_MIDDLE, PRIORITY_LOW } from "./constants";

const ResumeFilter = ({ onFilter }) => {
  const { filterPriorities } = useContext(ResumeListContext);

  const handlePriority = (index, e) => {
    let array = [...filterPriorities];
    array[index] = e.target.checked ? 1 : 0;

    onFilter({ priorities: array });
  };

  return (
    <>
      <div className="col s3 input-field">
        <div>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              checked={filterPriorities[PRIORITY_HIGH]}
              onChange={(e) => handlePriority(PRIORITY_HIGH, e)}
            />
            <span>
              <i className="material-icons red-text">flag</i>
            </span>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              checked={filterPriorities[PRIORITY_MIDDLE]}
              onChange={(e) => handlePriority(PRIORITY_MIDDLE, e)}
            />
            <span>
              <i className="material-icons yellow-text">flag</i>
            </span>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              checked={filterPriorities[PRIORITY_LOW]}
              onChange={(e) => handlePriority(PRIORITY_LOW, e)}
            />
            <span>
              <i className="material-icons green-text">flag</i>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

ResumeFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
export default ResumeFilter;
