import React, { useContext } from "react";
import ResumeListContext from "./ResumeListContext";
import PropTypes from "prop-types";

const ResumeList = ({ onCompleted }) => {
  const context = useContext(ResumeListContext);

  const { data } = context;

  return (
    <ul className="collection">
      {data.map((todo) => (
        <li key={todo.id} className="collection-item">
          <label>
            <input
              type="checkbox"
              className="filled-in"
              checked={todo.completed}
              onChange={(e) =>
                onCompleted({ id: todo.id, value: !todo.completed })
              }
            />
            <span>{todo.title}</span>
          </label>
          <span className="secondary-content">Actions</span>
        </li>
      ))}
    </ul>
  );
};

ResumeList.propTypes = {
  onCompleted: PropTypes.func.isRequired,
};

export default ResumeList;
