import './App.css';
// import Axios from 'axios';
import { useState, useEffect } from 'react'
import { useState } from 'react'
import { Task } from "./Task"

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewtask] = useState("");
  const [newEditTask, setNewEditTask] = useState("");
  const [showEdit, setShowEdit] = useState("");

  const handleChange = (event) => {
    setNewtask(event.target.value)
  }

  const handleEditChange = (event) => {
    setNewEditTask(event.target.value)
  }

  const addtask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
      disabled: true
    }
    const newTodoList = [...todoList, task]
    task.taskName === "" ? alert("null") : task.taskName === todoList.map((name) => name.taskName) ? alert("duplicate") : setTodoList(newTodoList)
    setNewtask("")
  }

  const deletedTask = (id) => {
    const newToDoList = todoList.filter((task) => {
      return task.id !== id
    })
    setTodoList(newToDoList)
  }

  const completedTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true }
      }
      else {
        return task
      }
    }))
  }

  const editTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, disabled: false }
      }
      else {
        return task
      }
    }))
    setShowEdit(true)
  }

  const saveTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, taskName: newEditTask, disabled: true }
      }
      else {
        return task
      }
    }))
    setShowEdit(false)
  }

  useEffect(() => {
    console.log("input appear")
  }, [showEdit])

  return (
    <div className="App">
      <div className='addTask'>
        <input type='text' onChange={handleChange} value={newTask} />
        <button onClick={addtask}>add</button>
      </div>
      <div className='list'>
        {todoList.map((task, key) => {
          return (<Task key={key} taskName={task.taskName} id={task.id} deletedTask={deletedTask} 
            completed={task.completed} completedTask={completedTask} editTask={editTask} disabled={task.disabled} saveTask={saveTask} handleEditChange={handleEditChange}
            showEdit={showEdit} />
          )
        })}
      </div>
    </div>
  );
}



// function App() {
//   const [excusser , setExcusser] = useState("")

//   const getExcuse = (excuse) => {
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {setExcusser(res.data[0].excuse)});
//   }

//   return (
//     <div className="App">
//       <h1>Genarate Excuse</h1>
//       <button onClick={() => getExcuse("party")}>Party</button>
//       <button onClick={() => getExcuse("family")}>Family</button>
//       <button onClick={() => getExcuse("office")}>Office</button>
//       <h1>{excusser}</h1>
//       </div>
//   );
// }

export default App;
