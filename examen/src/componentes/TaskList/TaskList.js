import React from "react";

const TaskList = (props) => {
  return (
    <div>
      <h1>TaskList</h1>
      {props.data.map((element) => {
        return (
          <table>
            <th>
              <td> ID </td>
              <td> Title </td>
              <td> Description </td>
              <td> Priority </td>
            </th>
            <tr
              onclick={() => {
                props.onTaskClicked(element.taskId);
              }}
            >
              <td> {element.taskId}</td>
              <td> {element.title}</td>
              <td> {element.description}</td>
              <td> {element.priority}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

/*const onTaskClicked = (id) => {
  props.onTaskClicked(id);
};*/

export default TaskList;
