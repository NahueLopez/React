import Image from "next//future/image"
import Link from "next/Link"
import styles from '../styles/header.module.css'
import { useRouter } from "next/router"

export default function Header() {

    const router= useRouter()

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={"/"}>
            <a>
                <Image src="/img/logo.svg" alt="imagen Logo" width={300} height={40} />
            </a>
        </Link>
      
        <nav className={styles.navegacion}>
            <Link href={"/"}>
                <a className={router.pathname === '/' ? styles.active : ''}>
                    Inicio
                </a>
            </Link> 
            <Link href={"/nosotros"}>
                <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                    Nosotros
                </a>
            </Link>   
            <Link href={"/tienda"}>
                <a className={router.pathname === '/tienda' ? styles.active : ''}>
                        Tienda
                </a>
            </Link> 
            <Link href={"/blog"}>
                <a className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                </a>
            </Link> 
            <Link href={"/carrito"}>
                <a className={router.pathname === '/blog' ? styles.active : ''}>
                    <Image src="/img/carrito.png" alt="imagen Logo" width={20} height={10} />
                </a>
            </Link> 
        </nav>
      </div>
    </header>
  )
}
