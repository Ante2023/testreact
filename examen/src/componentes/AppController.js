import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskItem from "./TaskItem";

const AppController = () => {
  const [taskListItems, setTaskListItems] = useState([]);
  const [taskClicked, setTaskClicked] = useState("");

  useEffect(() => {
    fetch(`http://10.212.160.134:3000/ex1`)
      .then((resp) => resp.json())
      .then((data) => setTaskListItems(data));
    // console.log(nombre);
  }, []);

  const onTaskClickedHandled = (id) => {
    setTaskClicked(taskListItems.filter((item) => item.id === id)[0]);
  };

  return (
    <div>
      {taskListItems && (
        <TaskList data={taskListItems} onTaskClicked={onTaskClickedHandled} />
      )}
      {taskClicked && <TaskItem task={taskListItems} />}
    </div>
  );
};

export default AppController;
