import React, { useContext, useState } from "react";
import ResumeListContext from "./ResumeListContext";
import PropTypes from "prop-types";

const ResumeList = ({ onDelete, onEdit }) => {
  const [editable, setEditable] = useState(false);
  const [tmpInputValue, setTmpInputValue] = useState("");
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
                    onEdit({ id: todo.id, completed: !todo.completed })
                  }
                />
                <span>&nbsp;</span>
              </label>
            </div>
            <div className="col s3 input-field">
              {todo.editable ? (
                <>
                  <i
                    className="prefix material-icons green-text"
                    onClick={(e) => {
                      onEdit({
                        id: todo.id,
                        editable: false,
                        title: tmpInputValue,
                      });
                      setTmpInputValue("");
                    }}
                  >
                    camera
                  </i>
                  <input
                    type="text"
                    value={tmpInputValue ? tmpInputValue : todo.title}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setTmpInputValue(e.target.value);
                    }}
                  />
                </>
              ) : (
                <span
                  onClick={(e) => {
                    if (!todo.editable) {
                      onEdit({
                        id: todo.id,
                        editable: !todo.editable,
                      });
                      setTmpInputValue(todo.title);
                    }
                  }}
                >
                  {todo.title}
                </span>
              )}
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
