<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React,{useState, useEffect} from "react";
>>>>>>> faa7e300e78c5621d1ec221d08eb40f994faaf2c
import NavBar from "../NavBar/NavBar";

import EachTask from "./EachTask/EachTask";

import './task.css'

function Task() {
<<<<<<< HEAD
  // define states
  const [todos, setTodos] = useState([]);

  // Fetching data
  const fetchData = async () => {
    const resp = await fetch("http://jsonplaceholder.typicode.com/todos");
    const dataList = await resp.json();
    dataList.splice(6, dataList.length - 1); // outoff 200 elements only 6 we gone take
    setTodos(dataList);
    localStorage.setItem("todos", JSON.stringify(dataList));
  };

  // handle delete operation
  const handleDelete = (id) => {
    const listOfTodos = JSON.parse(localStorage.getItem("todos"));
    const result = listOfTodos.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(result));
    setTodos(result);
  };

  const handleAddTask = () => {
    fetchData();
  };

  // componentDidMount
  useEffect(() => {
    fetchData();
  }, []);
=======
  const [todos, setTodos] = useState([])

  const fetchData = async () =>{
    const resp  = await fetch('http://jsonplaceholder.typicode.com/todos')
    const dataList = await resp.json()
    dataList.splice(6, dataList.length-1) // outoff 200 elements only 6 we gone take
    setTodos(dataList) 
  }

  useEffect (()=>{
    fetchData()
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
>>>>>>> faa7e300e78c5621d1ec221d08eb40f994faaf2c

  return (
    <>
      <NavBar />
<<<<<<< HEAD
      <div className="task-div">
        <header className="task-header">
          <h2 className="h2">Todays Task</h2>
        </header>
        <div className="task-list">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Todo</th>
                <th>Completed</th>
                <th>Opration</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(({ id, title, completed }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                      {String(completed).charAt(0).toUpperCase() +
                        String(completed).slice(1)}
                    </td>
                    <td>
                      <button
                        className="task-btn"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="task-btn add-btn" onClick={() => handleAddTask()}>
            Add Task
          </button>
=======
      <div className='task-div'>
        <header className='task-header'>
          <h2 className='h2'>Todays Task</h2>
        </header>
        <div className='task-list'>
          {
            todos.map(({id, title, completed})=>{
              return <EachTask key={id} id={id} title={title} completed={completed}/>
            })
          }
>>>>>>> faa7e300e78c5621d1ec221d08eb40f994faaf2c
        </div>
      </div>
    </>
  );
}

export default Task;
