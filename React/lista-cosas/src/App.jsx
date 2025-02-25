import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasAlmacenadas = localStorage.getItem('tareas');
    return tareasAlmacenadas ? JSON.parse(tareasAlmacenadas) : []
  });

  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (event) => {
    event.preventDefault();
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, { nombre: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  }

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  }

  const marcarCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  }
  //1
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  //2
  const [radio, setRadio] = useState("todas");

  const filtroTarea = e => {
    setRadio(e.target.value);
  }

  const tareasFiltradas = tareas.filter(tarea=>{
    if(radio==="todas") return true;
    if(radio==="no-completas") return !tarea.completada;
    if(radio==="completas") return tarea.completada;
  })

  //3
  const editarTarea = (index) =>{
    let nuevoValor = prompt("Cual es la nueva tarea");
    const tareasEditar = [...tareas];
    tareasEditar[index].nombre = nuevoValor;
    setTareas(tareasEditar);
  }

  return (
    <div>
      <h1>Mis tareas</h1>
      <input type="radio" name="filtro" value="todas" id="todas" onChange={filtroTarea} checked={radio==="todas"} />
      <label htmlFor="todas">Todas</label>
      <input type="radio" name="filtro" value="no-completas" id="no-completas" onChange={filtroTarea} checked={radio==="no-completas"}/>
      <label htmlFor="no-completadas">No completadas</label>
      <input type="radio" name="filtro" id="completas" value="completas" onChange={filtroTarea} checked={radio==="completas"}/>
      <label htmlFor="completas">Completadas</label>
      <ul>
        {
          tareasFiltradas.map((tarea, index) => (
            <li key={index}>{tarea.nombre}
              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
              <button onClick={() => marcarCompletada(index)}>{tarea.completada ? 'Completadas ' : 'No completada'}</button>
              <button onClick={() => editarTarea(index)}>Editar tarea</button>
            </li>
          ))
        }
      </ul>

      <form onSubmit={agregarTarea}>

        <p>
          Tarea: <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
        </p>
        <p>
          <button type="submit">Agregar</button>
        </p>
      </form>
    </div>
  );
}

export default App;
