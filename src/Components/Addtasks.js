import React, { useReducer } from 'react';

const initialState = {
  taskName: '',
  description: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inputs':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

const AddTasks = ({ addTask }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputs = (e) => {
    dispatch({
      type: 'inputs',
      name: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the page from refreshing when the form is submitted
    addTask(state); // call the addTask function with the state
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>TO Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Add a task"
          onChange={handleInputs}
          value={state.taskName}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleInputs}
          value={state.description}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTasks;
