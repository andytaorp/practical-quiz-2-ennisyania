import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
      e.preventDefault();
  
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
        placeholder="Task Description..."
        onChange={handleDescription}
        value={description}
      />

      <button type="submit" onClick={handleSubmit}>Add</button>
    </form>
  );
}
