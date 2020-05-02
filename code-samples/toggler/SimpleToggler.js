import React, { useState } from "react";
import PropTypes from "prop-types";

const SimpleToggler = ({ value } = { value: false }) => {
  const [toggle, setToggle] = useState(value);
  return (
    <div className="container">
      <div className="switch">
        <label>
          Off
          <input
            type="checkbox"
            onChange={(e) => setToggle(!toggle)}
            value={toggle}
          />
          <span className="lever"></span>
          On
        </label>
      </div>
    </div>
  );
};

SimpleToggler.propTypes = {
  value: PropTypes.bool.isRequired,
};

export default SimpleToggler;
