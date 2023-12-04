// Animacion de Escritura
import { TypeAnimation } from 'react-type-animation';
// Iconos
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
// Imagenes
import Animacion from '../assets/animacion.png'
import Planeta from '../assets/planeta.png'

// Movimiento
import { motion } from 'framer-motion'
//Variants
import { fadeIn } from '../efecto'

export default function Home() {
  return (
    <section id='home' className='h-screen flex md:items-center lg:items-center lg:gap-x-12 '>
      <div className="container mx-auto">
        <div className=' mx-auto flex flex-col gap-y-8 md:flex-row lg:items-center lg:gap-x-12 mt-20 md:mb-[50vh] lg:m-0'>
          {/* Texto */}
          <div className=' xl:mx-40 flex-1 text-center font-secondary lg:text-left' >
            <motion.div 
              variants={fadeIn('up',0.3)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once:false, amount:0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] md:text-[70px]'>
                Nahuel <span>Lopez</span>
            </motion.div>
            <motion.div 
              variants={fadeIn('up',0.4)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once:false, amount:0.7}} 
              className='mt-5 mb-5 text-[24px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white mr-4 '></span>
                <TypeAnimation sequence={[
                  'Analista en sistemas',
                  500,
                  'Full-Stack',
                  500,
                  'Developer ',
                  500,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                />         
            </motion.div>
            <motion.div 
              variants={fadeIn('up',0.7)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once:false, amount:0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:m-0'>
                
                <a href='https://github.com/NahueLopez' target="_blank">
                  <FaGithub/>
                </a>
                  <a href='https://www.linkedin.com/in/nahuelopez/' target="_blank">
                    <FaLinkedin/>
                  </a>
                  <a href='https://wa.me/2236185178' target="_blank">
                    <FaWhatsapp/>
                  </a>
                  
            </motion.div>
          </div>

          <motion.div 
            variants={fadeIn('down',0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once:false, amount:0.7}} 
            className='lg:flex flex-1 max-w-[320px] lg:max-w-[482px] relative items-center justify-center'>
            <div className='absolute animate-bounce top-20 lg:top-[-160px] '>
              <img src={Animacion} alt=""/>
            </div>
            <div className='absolute top-40 lg:top-[-20px] '>
              <img src={Planeta} alt=""/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

  )
}
