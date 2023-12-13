import Image from "next/future/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, GuitarLa, venta de guitarra y mas'}
    >

    <main className="contenedor">
      <h1 className="heading">Nosotros</h1>

      <div className={styles.contenido}>
        <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Nam pretium scelerisque ante, vel finibus mauris auctor in. Aliquam erat volutpat. Nullam faucibus, felis sit amet placerat posuere, purus ex dapibus neque, vitae laoreet lectus dui id enim. Aenean sed turpis sed arcu tincidunt varius. Curabitur et tellus quis urna pellentesque volutpat id sit amet velit. Phasellus vitae molestie leo.
          </p>
          <p>
            Cras cursus lorem mauris, vel scelerisque lacus interdum ut. Proin cursus, urna nec congue maximus, nisl lectus lobortis est, eu tempus magna dui sed est. Curabitur viverra arcu lorem, vel placerat sapien tempus eget. Curabitur convallis ultricies dui, eu mollis nisi congue sit amet. Sed scelerisque turpis ut purus lobortis consequat. 
          </p>
        </div>
      </div>
    </main>
    </Layout>
  )
}
