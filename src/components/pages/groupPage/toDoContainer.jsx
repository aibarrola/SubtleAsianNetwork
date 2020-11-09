import React from "react";
import "./groupPage.css";
import "./groupToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ToDo from "../groupPage/toDo";
import { useState } from "react";

function Tasks({ todos, toggleComplete, removeToDo, filter }) {
  let todosFilter = [];

  if (filter === "all") {
    //console.log(filter);
    todosFilter = todos;
  } else if (filter === "active") {
    todosFilter = todos.filter((todo) => !todo.completed);
  } else if (filter === "complete") {
    todosFilter = todos.filter((todo) => todo.completed);
  }

  return (
    <div className="taskList">
      {todosFilter.map((todo) => (
        <ToDo
          todo={todo}
          key={todo._id}
          removeToDo={removeToDo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default Tasks;
