import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {
  

  
  return (
    <Layout
      title={'Tienda Virtual'}
      description={'Tienda Virtual, GuitarLa, venta de guitarra y mas'}
    >

    <main className="contenedor">
      <h1 className="heading">Nuestra Colección</h1>

      <div className={styles.grid}>
        {guitarras?.map(guitarra => (
          <Guitarra
            key={guitarra.id}
            guitarra={guitarra.attributes}
          />
        ))}
      </div>

    </main>

    </Layout>
  )
}

/* Esta manera es estatica- No se actualiza siempre sin que se haga un build
  export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  //Renombramos data por guitarras
  const {data: guitarras} = await respuesta.json()

  return{
    props : {
      guitarras
    }
  }
}
*/

/* Dinamica */
export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  //Renombramos data por guitarras
  const {data: guitarras} = await respuesta.json()

  return{
    props : {
      guitarras
    }
  }
}