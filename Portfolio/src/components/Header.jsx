//Imagenes
import Logo from '../assets/logo.png'
//pdf
import pdf from '../assets/CV-Nahuel-Luis Lopez.pdf'

export default function Header() {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* Boton */}
          <a
            href={pdf}
            download="Currículum Nahuel Luis Lopez.pdf"
            className='btn btn-sm'>
                Descarga mi CV
          </a>
        </div>
      </div>
    </header>
  )
}
