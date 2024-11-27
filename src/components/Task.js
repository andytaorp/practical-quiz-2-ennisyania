import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */

export default function Task({ task, onDeleteTask, onToggleTask }) {
    return (
        <li>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <p
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.description} 
          </p>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      );
}
