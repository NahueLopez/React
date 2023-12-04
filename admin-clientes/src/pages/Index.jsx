import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import { obtenerClientes } from '../data/clientes'


export function loader(){
  const clientes = obtenerClientes()
  return clientes
}

function Index() {

  //Recuperamos los datos se exportaron  y cargamos en el loader
  const clientes = useLoaderData()

  // Error Boundaries - Son componentes de React que obtienen el error dentro del error

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus Clientes</p>
      
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <Cliente
                  cliente={cliente}
                  key={cliente.id}
                />
              ))}
            </tbody>
        </table>
      ) : (
        <p>No hay clientes aun</p>
      )}
    </>
  )
}

export default Index
