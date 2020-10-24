import React, { useEffect, useState } from "react";
import "./groupPage.css";
import "./groupToDo.css";
import ToDoContainer from "../groupPage/toDoContainer";
import ToDoForm from "../groupPage/toDoForm";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function GroupToDo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addToDo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeToDo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeFilter(filter) {
    setFilter(filter);
  }

  return (
    <div className="tasksContainer">
      <div className="listNav">
        <small className="taskHeader"> Tasks </small>
        <div className="toDoSwitch">
          <small
            className={`switchTabs  ${filter === "all" ? "active" : ""}`}
            onClick={() => changeFilter("all")}
          >
            All
          </small>
          <small
            className={`switchTabs  ${filter === "active" ? "active" : ""}`}
            onClick={() => changeFilter("active")}
          >
            In-progress
          </small>
          <small
            className={`switchTabs  ${filter === "complete" ? "active" : ""}`}
            onClick={() => changeFilter("complete")}
          >
            Completed
          </small>
        </div>
      </div>
      <div className="todoContainer">
        <ToDoForm addToDo={addToDo} />
        <ToDoContainer
          removeToDo={removeToDo}
          todos={todos}
          toggleComplete={toggleComplete}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default GroupToDo;
