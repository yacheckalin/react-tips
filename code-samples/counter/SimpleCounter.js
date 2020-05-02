import React, { useState } from "react";
import PropTypes from "prop-types";

const SimpleCounter = ({ initial }) => {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="container">
      <div className="row">
        <div className="col s1">
          <span
            id="desc_counter"
            className="flow-text"
            onClick={(e) => setCounter(counter - 1)}
          >
            <i className="material-icons red-text">remove_circle_outline</i>
          </span>
        </div>
        <div className="col s2 blue-text" id="counter_value">
          {counter}
        </div>
        <div className="col s1">
          <span
            id="asc_counter"
            className="flow-text"
            onClick={(e) => setCounter(counter + 1)}
          >
            <i className="material-icons green-text">add_circle</i>
          </span>
        </div>
      </div>
    </div>
  );
};

SimpleCounter.propTypes = {
  initial: PropTypes.number.isRequired,
};

export default SimpleCounter;
