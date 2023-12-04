// Motion
import { motion } from 'framer-motion'
// Variantas
import {fadeIn } from '../efecto'
//astro
import astro from '../assets/astro.png'

export default function Work() {
  
  // Esperiencia
  const trabajos = [
    {
      name:'Capacitador de Robotica',
      descripcion:"Enseño los conceptos de la robótica y proporciono diversas actividades para que los estudiantes logren comprender estos principios. Además, ofrezco una introducción a la programación mediante el uso de la programación en bloque.",
      link:'fundacion 360'
    },
    {
      name:'Backend Developer',
      descripcion:"Realicé mantenimiento y mejoras en el software de la empresa mediante el uso de Visual Basic 6.0. Además, participé en el desarrollo de un software para automatizar los procesos administrativos utilizando C y Selenium.",
      link:'Baisys'
    },
    {
      name:'Soporte Técnico',
      descripcion:"Realicé soporte técnico a usuarios de las plataformas virtuales de Moodle y desarrollé videos y guías detalladas para diversos roles de usuarios, con el objetivo de facilitar la comprensión y el uso eficiente de la plataforma.",
      link:'Coned'
    }
    ,
    {
      name:'Full Stack Developer',
      descripcion:"Colaboré en la creación de un sistema completo para la gestión de un colegio, utilizando HTML, CSS y JavaScript para la interfaz y la interactividad, mientras que PHP manejó el desarrollo del servidor y MySQL gestionó las bases de datos.",
      link:'Hilet'
    }
    
  ]
  
  return (
    <section id='work' className='section'>
    <div className='container mx-auto '>
      <div className='xl:mx-40 mt-[-150px] flex flex-col lg:flex-row h-screen'>
        
        {/* texto */}
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 mb-12 md:mb-[-250px]  xl:mb-0 xl:mx-40'>
          <h2 className='lg:h2 h3 text-accent mb-6 '>MI EXPERIENCIA</h2>
          <h3 className='lg:h3 h4 max-w-[455px] mb-16 hidden lg:block'>
            Constantemente estoy buscando nuevas oportunidades.
          </h3>
          <img src={astro} alt="" className='hidden lg:block mix-blend-lighten lg:mt-[-30px]' />
        </motion.div>
        {/* Servicios */}
        <motion.div 
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 mt-[-450px] lg:mt-0'>
          {/* services list */}
          <div>
            {trabajos.map((service, index )=>{
              // destructure service
              const {name,descripcion,link} = service
              return(
                <div className=' border-b border-white/40 h-20 md:h-[146px] xl:h-full md:mb-[30px] flex ' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold md:mb-6'>
                      {name}
                    </h4>
                    <p className=' md:block hidden font-secondary leading-tight '>{descripcion}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
              ) 
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}
