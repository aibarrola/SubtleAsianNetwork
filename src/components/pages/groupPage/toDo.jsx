import React from "react";
import "./groupPage.css";
import "./groupToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, toggleComplete, removeToDo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeToDo(todo.id);
  }
  return (
    <div className="taskLi shadow">
      <div className={`toDoCheckBox`}>
        <div
          className={`checkCircle ${todo.completed ? "" : "active"}`}
          onClick={handleCheckboxClick}
        >
          {todo.completed && (
            <FontAwesomeIcon className="checkIcon" icon={faCheck} />
          )}
        </div>
      </div>
      <small className="taskName"> {todo.taskName} </small>
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
