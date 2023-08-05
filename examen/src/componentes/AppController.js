import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskItem from "./TaskItem";

const AppController = () => {
  const [nombre, setombre] = useState([]);

  useEffect(() => {
    fetch(`http://10.212.160.134:3000/ex1`)
      .then((resp) => resp.json())
      .then((data) => setombre(data));
    // console.log(nombre);
  }, []);

  const getId = (id)=>{
    console.log(`El id es ${id}`);
  }

  return (
    <div>
      <TaskList data={nombre}  getId = {getId}/>
      <TaskItem data={nombre} />
    </div>
  );
};

export default AppController;
