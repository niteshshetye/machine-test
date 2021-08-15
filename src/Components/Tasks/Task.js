import React,{useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";

import EachTask from "./EachTask/EachTask";

import './task.css'

function Task() {
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

  return (
    <>
      <NavBar />
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
        </div>
      </div>
    </>
  );
}

export default Task;
