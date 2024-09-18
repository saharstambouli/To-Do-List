import React from 'react'
import '../styles/TaskItem.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const TaskItem = ({task , toggleTask, deleteTask , updateTask}) => {

    //track whether the task is in editing mode.
    const [isEditing, setIsEditing] = useState(false);

    // holds the current values of the task being edited.
    const [editedTask, setEditedTask] = useState({ taskName: task.taskName, description: task.description });

    console.log("editedTask",editedTask)
    
//Sets isEditing to true to enable editing mode.
  const handleEditClick = () => {
        setIsEditing(true);
    };

// Cancels editing, resets isEditing to false, and restores the original task values.
   
    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedTask({ taskName: task.taskName, description: task.description });
    };

    const handleSaveClick = () => {
        updateTask(task.id, editedTask);
        setIsEditing(false);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <li style={{ color: 'black' }} className='Form-item'>
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            name="taskName"
                            value={editedTask.taskName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="description"
                            value={editedTask.description}
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <strong>{task.taskName}</strong>: {task.description}
                    </div>
                )}
                <Button variant="success" onClick={() => toggleTask(task.id)}>
                    {task.completed ? 'Incomplete' : 'Done'}
                </Button>
                {isEditing ? (
                    <>
                        <Button variant="warning" onClick={handleSaveClick}>Save</Button>
                        <Button variant="secondary" onClick={handleCancelClick}>Cancel</Button>
                    </>
                ) : (
                    <Button variant="success" onClick={handleEditClick}>Edit</Button>
                )}
            <Button variant="danger" onClick={() => {
                    if (window.confirm('Are you sure you wish to delete this item?')) {
                        deleteTask(task.id);
                    }
                }}>
                    Delete
                </Button> 
                    
                  
            </li>
        </div>
    );
};

export default TaskItem