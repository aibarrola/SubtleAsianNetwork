import React, { useEffect, useState } from "react";
import "./groupPage.css";
import "./groupToDo.css";
import ToDoContainer from "../groupPage/toDoContainer";
import ToDoForm from "../groupPage/toDoForm";
import Axios from "axios";
import { useParams } from "react-router-dom";

function GroupToDo() {
  let {id} = useParams();
  const [todos, setTodos] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    Axios.get(`https://san-api.herokuapp.com/groups/${id}/`)
    .then((res)=>{
      setTodos(res.data.toDos.reverse())
    })
    .catch(err=>console.log(err))
  }, []);

  function addToDo(todo) {
    Axios.post(`https://san-api.herokuapp.com/groups/todo/${id}/add/`,todo)
    .then((res)=>{
      Axios.get(`https://san-api.herokuapp.com/groups/${id}/`)
      .then((res)=>{
        setTodos(res.data.toDos.reverse())
      })
      .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
   
  }

  // Switches completetion state to completed or not completed
 async function toggleComplete(_id, checked) {
    setTodos(
      todos.map((todo) => {
        if (todo._id === _id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
    const request = {
      todoId: _id,
      todoBoolean: !checked
    }
    Axios.post(`https://san-api.herokuapp.com/groups/todo/${id}/update/`,request)
    .catch(err=>console.log(err))
  }

  //Remove todo from list
  async function removeToDo(_id) {
    setTodos(todos.filter((todo) => todo._id !== _id));
    const request={
      todoId: _id
    }
    Axios.post(`https://san-api.herokuapp.com/groups/todo/${id}/delete/`,request)
    .then((res)=>{
      console.log(res);
    })
    .catch(err=>console.log(err));
  }

  //Changes the filter state
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
