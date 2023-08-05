import React, { useState } from "react";


const TaskList = (props) => {
  return (
    <div>
        <h1>TaskList</h1>
        <ul className="caught-task-list">
        {props.taskName.map((taskName) => {
          return (
            <li className="caught-task-list-element" key={taskName}>
              {taskName}
            </li>
          );
        })}
      </ul>
      <div className="caught-pokemon-info">
        <p>{"Las tareas del día pendiente son " + props.taskName.length + " Pokémon on " + props.}</p>
      </div>
    </div>
  );
};

export default TaskList;