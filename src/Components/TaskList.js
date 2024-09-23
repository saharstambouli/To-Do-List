import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks , deleteTask , toggleTask ,updateTask}) => {
  return (
    <div>
      <ul>

{

 (tasks.length >0) ? (
  tasks?.map((task) => (
    <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} updateTask={updateTask}/>
    
  
  ))

 ) : (
  <h1>No Task</h1>
 )
}

      </ul>


    </div>
  )
}

export default TaskList