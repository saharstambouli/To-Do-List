
import './App.css';
import Addtasks from './Components/Addtasks';
import TaskList from './Components/TaskList';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks'))||[]);

/*   // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []); */

  // Save tasks to local storage whenever they change
  useEffect(() => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), completed: false }]);
  };

  //Delete Task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  
  }

  //Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks?.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

 
    const updateTask = (id, updatedTask) => {
        setTasks(tasks?.map(task => 
            task.id === id? { ...task, ...updatedTask } : task
        ));
    };


    return (
      <div className="App">
        <header className="App-header">
          <Addtasks addTask={addTask} />
          <TaskList tasks={tasks} toggleTask ={toggleTask} deleteTask ={deleteTask} updateTask={updateTask} />
        </header>
      </div>
    );
  }

  export default App;
