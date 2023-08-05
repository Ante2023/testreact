import React from "react";

const TaskList = (props) => {
  console.log(props);
  return (
    <div>
      {" "}
      <h1
        onClick={() => {
          props.getId("2");
        }}
      >
        Dame ID
      </h1>
    </div>
  );
};

export default TaskList;
