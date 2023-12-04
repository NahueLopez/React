// Movimiento
import { motion } from 'framer-motion'
//Variants
import { fadeIn } from '../efecto'


export default function About() {
  return (
<section id="about" className='section'>
  <div className='container mx-auto'>
    <div className=' mt-[-90px] xl:mx-40 flex flex-col md:flex-row lg:items-start lg:gap-x-20 gap-y-0 h-screen'>
      {/* Imagen de fondo */}
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 bg-about bg-contain bg-no-repeat lg:h-[550px] mix-blend-lighten hidden md:block'>
      </motion.div>
     
      {/* Texto */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 lg:mt-20 '>
        <h2 className='h3 lg:h2 text-accent text'>Sobre Mi:</h2>
        <h3 className='lg:h3 h4 '>
          Me caracterizo por ser una persona disciplinada y enfocada en el estudio.
        </h3>
        <p className='lg:mb-6'>
          Constantemente estoy buscando nuevas oportunidades de capacitación para fortalecer mis habilidades y mantenerme actualizado con las últimas tendencias y tecnologías en el ámbito de la programación.
        </p>

      </motion.div>

    </div>
  </div>
</section>


  )
}
