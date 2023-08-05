import React from "react";

const TaskList = (props) => {
  return (
    <div>
      <h1>TaskList</h1>
      {props.data.map((element) => {
        return (
          <table>
            <tr
              onclick={() => {
                onTaskClicked(element.taskId);
              }}
            >
              <td> ID {element.taskId}</td>
              <td> Title {element.title}</td>
              <td> Description {element.description}</td>
              <td> Priority {element.priority}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

const onTaskClicked = (id) => {
  props.onTaskClicked(id);
};

export default TaskList;
