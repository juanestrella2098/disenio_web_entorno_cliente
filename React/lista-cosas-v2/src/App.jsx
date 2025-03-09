import React, { useContext, useState } from "react";
import { TaskProvider, TaskContext } from "./context/taskcontext";
import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";
import TaskFilter from "./components/taskfilter";
import Login from "./components/login";

const App = () => {
  const {isLoggedIn, logout} = useContext(TaskContext);
  const [radio, setRadio] = useState("todas");

  const filtroTarea = (e) => {
    setRadio(e.target.value);
  };

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div>
      <button onClick={logout}>Cerrar sesión</button>
      <h1>Mis tareas</h1>
      <TaskFilter radio={radio} filtroTarea={filtroTarea} />
      <TaskList radio={radio} />
      <TaskForm />
    </div>
  );
};

export default () => (
  <TaskProvider>
    <App />
  </TaskProvider>
);