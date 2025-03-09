import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [ tareas, setTareas ] = useState(() => {
    const tareasAlmacenadas = localStorage.getItem("tareas");
    return tareasAlmacenadas ? JSON.parse(tareasAlmacenadas) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { nombre: nuevaTarea, completada: false }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  const marcarCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoValor) => {
    const tareasEditar = [...tareas];
    tareasEditar[index].nombre = nuevoValor;
    setTareas(tareasEditar);
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <TaskContext.Provider
      value={{
        tareas,
        isLoggedIn,
        agregarTarea,
        eliminarTarea,
        marcarCompletada,
        editarTarea,
        login,
        logout,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};