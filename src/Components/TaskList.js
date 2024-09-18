import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks , deleteTask , toggleTask ,updateTask}) => {
  return (
    <div>
      <ul>

{tasks.map((task) => (
  <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} updateTask={updateTask}/>
  

))
}


      </ul>

     



    </div>
  )
}

export default TaskList