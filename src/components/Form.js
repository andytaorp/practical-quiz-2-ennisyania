import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
      e.preventDefault();

      if (description.trim() === "") {
        alert("Please enter a task description.");
        return; 
      }
  
      const task = {
        id: Date.now(),
        description: description,
        completed: false,
      };
  
      onAddTask(task);
  
      setDescription("");
    
  };

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    /*TODO: add a form to add a new task*/
    <form onSubmit={handleSubmit}>
      <input
        id="description"
        type="text"
        placeholder="New Task"
        onChange={handleDescription}
        required
        value={description}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}
