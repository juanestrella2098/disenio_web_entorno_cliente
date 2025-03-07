import { useState } from 'react'
import './App.css'

function App() {
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasenia: "",
    edad: "",
    telefono: "",
    pais: "inglaterra",
    terminos: false
  })

  const [erroresForm, setErroresForm] = useState({})
  const [formularioEstado, setFormularioEstado] = useState("initial")

  const manejadorCambiosInput = (e) => {
    const { name, value, type, checked } = e.target
    setFormularioDatos({
      ...formularioDatos,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const validateForm = () => {
    const errors = {}

    if (!formularioDatos.nombre) errors.nombre = "el nombre es obligatorio"
    if (!formularioDatos.apellido) errors.apellido = "el apellido es obligatorio"
    if (
      !formularioDatos.correo ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formularioDatos.correo)
    )
      errors.correo = "el email no es valido"
    if (!formularioDatos.contrasenia || formularioDatos.contrasenia.length < 8)
      errors.contrasenia = "debe de tener 8 caracteres"
    if (!formularioDatos.edad || Number(formularioDatos.edad) < 18)
      errors.edad = "tienes que tener 18 años"
    if (!formularioDatos.telefono || !/^\d{9}$/.test(formularioDatos.telefono))
      errors.telefono = "el telefono debe de tener 9 digitos"
    if (!formularioDatos.terminos)
      errors.terminos = "acepta los terminos y condiciones"

    setErroresForm(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormularioEstado("submitting")

    if (validateForm()) {
      localStorage.setItem("formularioDatos", JSON.stringify(formularioDatos))
      setFormularioEstado("success")
    } else {
      setFormularioEstado("error")
    }
  }




  return (
    <>
      <h1>formulario de registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formularioDatos.nombre}
            onChange={manejadorCambiosInput}
          />
          {erroresForm.nombre && <p>{erroresForm.nombre}</p>}
        </div>
        <div>
          <label>apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formularioDatos.apellido}
            onChange={manejadorCambiosInput}
          />
          {erroresForm.apellido && <p>{erroresForm.apellido}</p>}
        </div>
        <div>
          <label>correo electronico:</label>
          <input
            type="email"
            name="correo"
            value={formularioDatos.correo}
            onChange={manejadorCambiosInput}
          />
          {erroresForm.correo && <p>{erroresForm.correo}</p>}
        </div>
        <div>
          <label>contrasenia:</label>
          <input
            type="password"
            name="contrasenia"
            value={formularioDatos.contrasenia}
            onChange={manejadorCambiosInput}
          />
          {erroresForm.contrasenia && <p>{erroresForm.contrasenia}</p>}
        </div>
        <div>
          <label>edad:</label>
          <input
            type="number"
            name="edad"
            value={formularioDatos.edad}
            onChange={manejadorCambiosInput}
          />
          {erroresForm.edad && <p>{erroresForm.edad}</p>}
        </div>
        <div>
          <label>telefono:</label>
          <input
            type="text"
            name="telefono"
            value={formularioDatos.telefono}
            onChange={manejadorCambiosInput}
          />
          {erroresForm.telefono && <p>{erroresForm.telefono}</p>}
        </div>
        <div>
          <label>pais:</label>
          <select
            name="pais"
            value={formularioDatos.pais}
            onChange={manejadorCambiosInput}
          >
            <option value="mexico">mexico</option>
            <option value="estados unidos">estados unidos</option>
            <option value="espana">espana</option>
            <option value="inglaterra">inglaterra</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="terminos"
              checked={formularioDatos.terminos}
              onChange={manejadorCambiosInput}
            />
            acepto los terminos y condiciones
          </label>
          {erroresForm.terminos && <p>{erroresForm.terminos}</p>}
        </div>
        <button type="submit">enviar</button>
      </form>
  
      {formularioEstado === "submitting" && <p>enviando formulario...</p>}
      {formularioEstado === "success" && <p>formulario enviado con exito</p>}
      {formularioEstado === "error" && <p>por favor corrige los errores</p>}
    </>
  )
  
  

}

export default App
