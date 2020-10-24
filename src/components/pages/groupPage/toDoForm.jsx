import React, { useEffect, useState } from "react";
import "./groupPage.css";
import "./groupToDo.css";

//import ToDoContainer from "../groupPage/toDoContainer";

function ToDoForm({ addToDo, to }) {
  const [todo, setTodo] = useState({
    id: "",
    taskName: "",
    completed: false,
  });

  function handleTasksInputChange(e) {
    setTodo({ ...todo, taskName: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.taskName.trim()) {
      addToDo({ ...todo, id: generateRanId(11) });
      // reset taks input
      setTodo({ ...todo, taskName: "" });
    }
  }

  function generateRanId(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <form onSubmit={handleSubmit} className="formToDo">
      <input
        className="addTask"
        value={todo.taskName}
        type="text"
        onChange={handleTasksInputChange}
        placeholder="Add a task"
      />
    </form>
  );
}

export default ToDoForm;
