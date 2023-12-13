import Link from "next/Link"
import Layout from "../components/layout"


export default function Pagina404() {
  return (
    <Layout
        title="Pagina No encontrada"
    >
        <p className="error"> Pagina No encontrada</p>
        <Link href='/'>
            <a className="error-enlace">
                Ir a Inicio
            </a>
        </Link>
    </Layout>
  )
}
