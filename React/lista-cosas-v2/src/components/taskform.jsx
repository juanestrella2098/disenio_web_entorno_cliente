import React, { useState, useContext } from "react";
import { TaskContext } from "../context/taskcontext";

const TaskForm = () => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const { agregarTarea } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;
    agregarTarea(nuevaTarea);
    setNuevaTarea(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Tarea:{" "}
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">Agregar</button>
      </p>
    </form>
  );
};

export default TaskForm;