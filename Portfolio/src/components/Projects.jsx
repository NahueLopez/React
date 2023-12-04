//img
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img3 from '../assets/project3.png'
//icons lenguajes
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import php from '../assets/php.png'
import react from '../assets/react.png'
import taiwind from '../assets/taiwind.png'
import mysql from '../assets/mysql.png'
import boostrap from '../assets/boostrap.png'
import remix from '../assets/remix.png'
import laravel from '../assets/laravel.png'
// Movimiento
import { motion } from 'framer-motion'
//Variants
import { fadeIn } from '../efecto'

export default function Projects() {
  return (
    <section id="projects" className='section'>
      <div className='container mx-auto h-screen'>
        <div className='xl:mx-40 mt-[-150px] lg:mt-20 xl:mt-10 flex flex-col lg:flex-row gap-x-10 h-screen'>
          <motion.div 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once:false, amount:0.7}} 
            className='flex-1 flex flex-col gap-y-5 mb-10 lg:mt-[-200px] lg:mb-0 xl:mt-[-130px]'>
              {/* Text */}
              <div>
                <h2 className='h2 leading-tight text-accent'>Mis ultimos <br />
                  trabajos.
                </h2>
                <p className='max-w-sm mb-2'>
                  Estoy comprometido con el aprendizaje continuo y la mejora constante, por lo que estaré agregando más proyectos y actualizando mi portafolio a medida que evolucione mi viaje profesional.
                </p>
                <p className='h3 mt-3'>¡Sigamos Aprendiendo!</p>
              </div>
              {/* Img */}
              <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* Overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* Img */}
                <img className="group-hover:scale-125 transition-all duration-500" src={img1} alt=""/>
                {/* Subtitulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    Web de guitarras
                  </span>
                  
                  </div>
                {/* Titulo */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white flex gap-x-4'>
                  <img src={html} alt="" className='w-8 h-8' />
                  <img src={css} alt="" className='w-8 h-8'/>
                  <img src={js} alt="" className='w-8 h-8'/>
                  <img src={taiwind} alt="" className='w-8 h-8'/>
                  <img src={react} alt="" className='w-8 h-8'/>
                  <img src={remix} alt="" className='w-8 h-8'/>
                </span>
                </div>
              </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once:false, amount:0.7}} 
            className=" flex-1 flex flex-col gap-y-5 lg:mt-[-160px]  xl:gap-y-10 mt-[-190px]">
            {/* img2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={img2} alt=""/>
              {/* Subtitulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Web Inmobiliaria
                </span>
                
                </div>
              {/* Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white flex gap-x-4'>
                  <img src={html} alt="" className='w-8 h-8' />
                  <img src={css} alt="" className='w-8 h-8'/>
                  <img src={js} alt="" className='w-8 h-8'/>
                  <img src={boostrap} alt="" className='w-8 h-8'/>
                  <img src={php} alt="" className='w-8 h-8'/>
                  <img src={laravel} alt="" className='w-8 h-8'/>  
                  <img src={mysql} alt="" className='w-8 h-8'/>
                </span>
               
              </div>
            </div>
            {/* img3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={img3} alt=""/>
              {/* Subtitulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Planificador de gastos
                </span>
                
                </div>
              {/* Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white flex gap-x-4'>
                  <img src={html} alt="" className='w-8 h-8' />
                  <img src={css} alt="" className='w-8 h-8'/>
                  <img src={js} alt="" className='w-8 h-8'/>
                  <img src={taiwind} alt="" className='w-8 h-8'/>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div> 
    </section>
  )
}
