import React from "react";
import "./groupPage.css";
import "./groupToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, toggleComplete, removeToDo }) {
  function handleCheckboxClick() {
    toggleComplete(todo._id,todo.checked);
  }

  function handleRemoveClick() {
    removeToDo(todo._id);
  }
  return (
    <div className="taskLi shadow">
      <div className={`toDoCheckBox`}>
        <div
          className={`checkCircle ${todo.checked ? "" : "active"}`}
          onClick={handleCheckboxClick}
        >
          {todo.checked && (
            <FontAwesomeIcon className="checkIcon" icon={faCheck} />
          )}
        </div>
      </div>
      <small className="taskName"> {todo.description} </small>
      <small className="taskDate"> Due March 2nd </small> 
      <FontAwesomeIcon
        icon={faTrash}
        className="trashIcon"
        onClick={handleRemoveClick}
      />
    </div>
  );
}

export default Todo;
