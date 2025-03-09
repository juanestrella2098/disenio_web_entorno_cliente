import React from "react";

const TaskFilter = ({ radio, filtroTarea }) => {
  return (
    <div>
      <input
        type="radio"
        name="filtro"
        value="todas"
        id="todas"
        onChange={filtroTarea}
        checked={radio === "todas"}
      /> 
      <label htmlFor="todas">Todas</label>
      <input
        type="radio"
        name="filtro"
        value="no-completas"
        id="no-completas"
        onChange={filtroTarea}
        checked={radio === "no-completas"}
      />
      <label htmlFor="no-completas">No completadas</label>
      <input
        type="radio"
        name="filtro"
        id="completas"
        value="completas"
        onChange={filtroTarea}
        checked={radio === "completas"}
      />
      <label htmlFor="completas">Completadas</label>
    </div>
  );
};

export default TaskFilter;