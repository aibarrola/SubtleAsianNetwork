import React, { useEffect, useState } from "react";
import "./groupPage.css";
import "./groupToDo.css";

function ToDoForm({ addToDo }) {
  const [todo, setTodo] = useState({
    description: "",
    checked: false,
  });

  //Grabs the current input value and sets it to state
  function handleTasksInputChange(e) {
    setTodo({ ...todo, description: e.target.value });
  }

  async function handleSubmit(todo, e) {
    e.preventDefault();
    if (todo.description.trim()) {
      addToDo(todo);
      //reset tasks input
      setTodo({ ...todo, description: "" });
    }
  }

 
  return (
    <form onSubmit={(e) => handleSubmit(todo, e)} className="formToDo">
      <input
        className="addTask"
        value={todo.description}
        type="text"
        onChange={handleTasksInputChange}
        placeholder="Add a task"
      />
    </form>
  );
}

export default ToDoForm;
