// Importa el componente Tabs si es necesario
import Tabs from './Tabs';
import TabsPersonal from './TabsPersonal';
//Imagen
import astronauta from '../assets/skill.png'
// Movimiento
import { motion } from 'framer-motion'
//Variants
import { fadeIn } from '../efecto'

function Skills() {
  return (
<section id="skills" className='section'>
  <div className='container my-auto mx-auto md:h-screen   '>
    <div className='xl:mx-40 mt-[-160px] flex flex-col md:flex-row '>

      {/* Columna para Habilidades  */}
      <motion.div
        variants={fadeIn('up',0.3)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once:false, amount:0.7}} 
        className='md:w-1/2 mb-8 lg:mb-0'>
        <div className='flex flex-col'>
          <h2 className='lg:h3 h4 text-accent text-center mb-4'>Habilidades Tecnicas</h2>
          <Tabs />
          <h2 className='lg:h3 h4 text-accent text-center mb-4'>Otras Habilidades</h2>
          <TabsPersonal />
        </div>
      </motion.div>

      {/* Columna para la Imagen */}
      <motion.div 
        variants={fadeIn('up',0.3)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once:false, amount:0.7}} 
        className='md:w-3/6 flex flex-col justify-center mt-8 lg:mt-[-50px] xl:mt-[-100px] h-screen'>
        <h2 className='lg:h2 h3 text-accent text-center hidden md:block'>Mis Habilidades</h2>
        <h2 className='lg:h3 h4 lg:mx-15 text-center my-0'>Siempre estoy buscando oportunidades para expandir mis conocimientos y mantenerme actualizado con las últimas tendencias tecnológicas y obtener nuevas habilidades blandas</h2>
        <img src={astronauta} alt="" className='lg:h-[200px] md:h-[150px] animate-pulse mx-auto mix-blend-lighten ' />
      </motion.div>

    </div>
  </div>
</section>










  );
}


export default Skills;
