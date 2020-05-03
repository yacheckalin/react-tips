import React, { useContext, useState } from "react";
import ResumeListContext from "./ResumeListContext";
import PropTypes from "prop-types";

const ResumeList = ({ onDelete, onEdit }) => {
  const [editable, setEditable] = useState(false);
  const context = useContext(ResumeListContext);

  const { data } = context;

  return (
    <ul className="collection">
      {data.map((todo) => (
        <li key={todo.id} className="collection-item">
          <div className="row">
            <div className="col s1">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={todo.completed}
                  onChange={(e) =>
                    onEdit({ id: todo.id, obj: ["completed", !todo.completed] })
                  }
                />
                <span>&nbsp;</span>
              </label>
            </div>
            <div className="col s3">
              <span>
                {editable ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      onEdit({ id: todo.id, obj: ["title", e.target.value] })
                    }
                  />
                ) : (
                  todo.title
                )}
              </span>
            </div>
            <div className="col s3">
              {todo.completed && (
                <span className="new badge green">completed</span>
              )}
              <span className="secondary-content">
                <i
                  className="material-icons red-text"
                  onClick={(e) => onDelete(todo.id)}
                >
                  delete
                </i>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

ResumeList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ResumeList;
