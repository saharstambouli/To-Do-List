import React, { useState } from 'react';

const Addtasks = ({ addTask }) => {
  const [inputs, setInputs] = useState({
    taskName: '',
    description: ''
  });

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault(); // prevents the page from refreshing when the form is submitted
    addTask(inputs); // call the addTask function with the inputs
  };

  return (
    <div>
      <h1 style={{color: 'green'}}>TO Do List</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Add a task"
          onChange={handleInputs}
          value={inputs.taskName}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleInputs}
          value={inputs.description}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addtasks;
