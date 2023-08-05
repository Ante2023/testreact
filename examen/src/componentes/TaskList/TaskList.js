import React, { useState } from "react";
import TaskList from "../TaskList";


const TaskList = (props) => {
  return (
    <div>
        <h1>TaskList</h1>
        {props.data.map((element) => {
          return (
            <table> 
                <tr>
                    <td>{element.taskId}</td>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                    <td>{element.priority}</td>
                </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
};



export default TaskList;