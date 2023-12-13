import Image from "next/future/image";
import styles from '../../styles/blog.module.css'
import { formatearFecha } from '../../utils/helpers'
import Layout from "../../components/layout";


export default function Post({posts}) {
    const {titulo, contenido, imagen ,publishedAt} = posts[0].attributes
  return (
    <Layout
        title = {titulo}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`imagen blog ${titulo}`}/>
            
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido[0].children[0].text}</p>

            </div>
        </article>
    </Layout>
  )
}


export async function getServerSideProps({ query: {url}}){

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data: posts} = await respuesta.json()

    return {
        props:{
            posts
        }
    }
}