import React from "react"
import "./App.css";

function App ()[

  const [task, setTask] = React.useState("")
  const [tasks, setTasks] = React.useState([])

  function handleAddTask(){

    if(task.trim === "") return

    const newTask = {
      id: Date.now(),
      text:task,
      completed:false,

    };

  setTasks([...tasks, newTask])
  setTask("");

  function handleCompleteTask(id) {
    setTasks(
      task.map((task)=> 
        task.id === id
      ? { ...task, completed: !task.completed }
          : task
      )
      )

    
  }

  }
]

