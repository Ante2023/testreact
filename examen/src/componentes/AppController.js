import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";


const AppController = () => {
  const [nombre, setombre]=useState([])

  useEffect(() => {
    fetch(`http://10.212.160.134:3000/ex1`)
      .then((resp) => resp.json())
      .then((data) => setombre(data));
      // console.log(nombre);
  }, []);

  return <div><TaskList data ={nombre}/></div>;
};

export default AppController;
