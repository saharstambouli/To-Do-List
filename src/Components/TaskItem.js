
import React, { useReducer } from 'react';
import '../styles/TaskItem.css';
import Button from 'react-bootstrap/Button';
import { CANCEL, saveTask , ChangeTask,EDIT } from './actions/actions';



const TaskItem = ({ task, toggleTask, deleteTask, updateTask }) => {

    
    const dispatch = useDispatch(); 

    const isEditing = useSelector((state) => state.isEditing); 
    const editedTask = useSelector((state) => state.editedTask); 

    //Sets isEditing to true to enable editing mode.
  /*   const handleEditClick = () => {
        dispatch({ type: 'EDIT' });
    }; */

      const handleSaveClick = () => {
       updateTask(task.id, editedTask);
       dispatch(saveTask(task.id, editedTask));
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
                onChange={() => dispatch (ChangeTask ()) }
               
            />
            <input
                type="text"
                name="description"
                value={editedTask.description}
                onChange={() => dispatch (ChangeTask ()) }
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
            <Button variant="secondary" onClick={() => dispatch(CANCEL())}>Cancel</Button>
        </>
    ) : (
        <Button variant="success"  onClick={() => dispatch(EDIT())}>Edit</Button>
    )}
    <Button variant="danger" onClick={() => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            deleteTask(task.id);
        }
    }}>
        Delete
    </Button>
</li>
        </div >
    );

};


export default TaskItem;

































/* import React, { useReducer } from 'react';
import '../styles/TaskItem.css';
import Button from 'react-bootstrap/Button';




// Define the reducer function
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'EDIT':
            return {
                ...state,
                isEditing: true,
            };
        case 'CANCEL':
            return {
                isEditing: false,
                editedTask: {
                    taskName: action.payload.taskName,
                    description: action.payload.description
                },
            };
        case 'SAVE':
            return {
                ...state,
                isEditing: false,
            };
        case 'CHANGE':
            return {
                ...state,
                editedTask: {
                    ...state.editedTask,
                    [action.payload.name]: action.payload.value,
                },
            };
        default:
            return state;
    }
};

const TaskItem = ({ task, toggleTask, deleteTask, updateTask }) => {



    const initialState = {
        isEditing: false,
        editedTask: {
            taskName: task.taskName,
            description: task.description
        }
    };


    // Use useReducer to manage isEditing and editedTask state
    const [state, dispatch] = useReducer(taskReducer, initialState);


    const { isEditing, editedTask } = state;

    console.log('editedTask', editedTask);

    //Sets isEditing to true to enable editing mode.
    const handleEditClick = () => {
        dispatch({ type: 'EDIT' });
    };

    // Cancels editing, resets isEditing to false, and restores the original task values.
    const handleCancelClick = () => {
        dispatch({
            type: 'CANCEL',
            payload: { taskName: task.taskName, description: task.description }
        });
    };

    const handleSaveClick = () => {
        updateTask(task.id, editedTask);
        dispatch({ type: 'SAVE' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            payload: { name, value }
        });
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
        </div >
    );

};


export default TaskItem;
 */