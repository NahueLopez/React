import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState, useEffect} from 'react'

function App() {
//Solo se retorna un elemento en si, un elemento mas alto

  const[pacientes, setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  //Se ejecuta una sola vez
  useEffect(() => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem("pacientes")) ?? []
      setPacientes(pacienteLS)
    }

    obtenerLS();
  },[])

  //JSON.stringigy lo que hace es para guardarlo en localStorage,
  //Se ejecuta todas las veces que cambia pacientes
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])


  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  return (
      //Dentro del return no puede haber codigo js
      //Es una forma de no poner tanto div
      //La forma de poner codigo, es dentro de {}
      //Dentro del return solo se puede hacer ternarios
      //Estamos pasando a header por prop un valor
      <div className="container mx-auto mt-20">
        <Header
          
        />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      
      </div>
    )
}

export default App
