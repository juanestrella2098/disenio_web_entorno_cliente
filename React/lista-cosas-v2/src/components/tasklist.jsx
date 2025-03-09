import React, { useContext } from "react";
import { TaskContext } from "../context/taskcontext";

const TaskList = ({ radio }) => {
  const { tareas, eliminarTarea, marcarCompletada, editarTarea } =
    useContext(TaskContext);

  const tareasFiltradas = tareas.filter((tarea) => {
    if (radio === "todas") return true;
    if (radio === "no-completas") return !tarea.completada;
    if (radio === "completas") return tarea.completada;
  }); 

  return (
    <ul>
      {tareasFiltradas.map((tarea, index) => (
        <li key={index}>
          {tarea.nombre}
          <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          <button onClick={() => marcarCompletada(index)}>
            {tarea.completada ? "Completada" : "No completada"}
          </button>
          <button onClick={() => editarTarea(index, prompt("Nueva tarea:"))}>
            Editar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;