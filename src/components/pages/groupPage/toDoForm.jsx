import React, { useEffect, useState } from "react";
import "./groupPage.css";
import "./groupToDo.css";

function ToDoForm({ addToDo }) {
  const [todo, setTodo] = useState({
    id: "",
    taskName: "",
    completed: false,
  });

  //Grabs the current input value and sets it to state
  function handleTasksInputChange(e) {
    setTodo({ ...todo, taskName: e.target.value });
  }

  //Submit todo and adds it to the todo array
  /*  function handleSubmit(e) {
    e.preventDefault();
    if (todo.taskName.trim()) {
      addToDo({ ...todo, id: generateRanId(11) });
      // reset taks input
      setTodo({ ...todo, taskName: "" });
    }
  } */

  function handleSubmit(array, e) {
    e.preventDefault();
    console.log(e);
    if (array.taskName.trim()) {
      addToDo({ ...array, id: generateRanId(11) });
      // reset taks input
      setTodo({ ...array, taskName: "" });
    }
  }

  //Generate a random id depending on the length
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
    <form onSubmit={(e) => handleSubmit(todo, e)} className="formToDo">
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
