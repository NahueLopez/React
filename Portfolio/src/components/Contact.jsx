// Movimiento
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../efecto'
import { useState, useEffect } from 'react';


export default function Contact() {
   
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  

  // Primer useEffect para restablecer los valores del formulario
  useEffect(() => {
    if (formSubmitted) {
      setFormValues(initialValues); // Restablece los valores del formulario
    }
  }, [formSubmitted, initialValues]);

  // Segundo useEffect para mostrar y ocultar el mensaje de éxito
  useEffect(() => {
    if (formSubmitted) {
      setShowSuccessMessage(true);

      const successTimeoutId = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      // Limpiar timeout en el desmontaje del componente o cuando formSubmitted cambie
      return () => clearTimeout(successTimeoutId);
    }
  }, [formSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id='contact' className='lg:section py-4 '>
    <div className='container mx-auto h-screen'>
      <div className='lg:mt-[100px] md:mt-[-200px] xl-mt-0 h-screen xl:mx-40 flex flex-col lg:flex-row '>
        {/* text */}
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex justify-start items-center lg:mt-[-700px]'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2
              tracking-wide'>
                Contacto
            </h4>
            <h2 className='text-[45px] md:text-[90px] leading-none mb-12'>
              !Trabajemos <br/> Juntos!
            </h2>
          </div>
        </motion.div>
        {/* fomr */}
        <motion.form 
          variants={fadeIn('left',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 mt-[-50px]  flex flex-col md:gap-y-6
            pb-24 p-6 lg:items-start items-center mb-0 '
          onSubmit={handleSubmit}
        >
          {showSuccessMessage && (
            <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">
              ¡Formulario enviado con éxito!
            </div>
          )}

          <input 
            className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all' 
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
              
          />
          <input 
            className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all' 
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email"
              required
          />
          <textarea className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
              resize-none mb-12'
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Mensaje"
              required
          ></textarea>

            <button className='btn btn-lg' type="submit">
              Enviar Mensaje
            </button>
          </motion.form>
      </div>
    </div>
  </section>
  )
}
