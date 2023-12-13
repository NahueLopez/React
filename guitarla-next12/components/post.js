import Link from "next/Link"
import Image from "next/future/image"
import { formatearFecha } from '../utils/helpers'
import styles from '../styles/blog.module.css'



export default function Post({post}) {

    const { contenido,imagen,titulo,url,publishedAt } = post
    
    return (
    <div>
        <article>
            <Image src={imagen.data.attributes.formats.small.url} width={600} height={400} alt={`imagen blog ${titulo}`}/>
            
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido[0].children[0].text}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}> 
                        Leer Post
                    </a>
                </Link>
            </div>
        </article>
    </div>
  )
}
