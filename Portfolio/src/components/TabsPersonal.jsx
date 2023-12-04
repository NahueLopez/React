import { useEffect } from 'react';
//Imagenes Personales
import organizacion from '../assets/organizacion.png';
import motivacion from '../assets/motivacion.png';
import pasiencia from '../assets/pasiencia.png';
import responsabilidad from '../assets/responsabilidad.png';
//Imagenes profesionales
import comunicacion from '../assets/comunicacion.png';
import creativo from '../assets/creativo.png';
import dedicado from '../assets/dedicado.png';
import teamwork from '../assets/teamwork.png';
//Imagenes Pasatiempos
import karate from '../assets/karate.png';
import mascota from '../assets/mascota.png';
import pelicula from '../assets/pelicula.png';
import game from '../assets/game.png';

import { m } from 'framer-motion';

const TabsPersonal = () => {
  useEffect(() => {
    let tabs = document.querySelectorAll(".tab-personal");
    let indicador = document.querySelector(".indicador-personal");
    let panels = document.querySelectorAll(".tab-panel-personal");

    indicador.style.width = tabs[0].getBoundingClientRect().width + 'px';
    indicador.style.left =
      tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicador.style.width = tab.getBoundingClientRect().width + 'px';
        indicador.style.left =
          tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

        panels.forEach(panel => {
          let panelId = panel.getAttribute("id");
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <div className="lg:max-w-3xl mx-auto lg:px-8">
      <div className="mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative lg:w-max mx-auto lg:h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-black/50 overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div className="absolute indicador-personal h-10 my-auto top-0 bottom-0 left-0 rounded-full shadow-md activity btn"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1-personal"
            id="tab-1-personal"
            tabIndex="0"
            className="relative block h-10 tab-personal rounded-full"
          >
            <span className="lg:text-white-800 hidden sm:block">Personales</span>
            <span className="text-white-800 sm:hidden">Personal</span>

          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2-personal"
            id="tab-2-personal"
            tabIndex="-1"
            className="relative block h-10 tab-personal rounded-full"
          >
            <span className="text-white-800 hidden sm:block">Profesionales</span>
            <span className="text-white-800 sm:hidden">Profesional</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3-personal"
            id="tab-3-personal"
            tabIndex="-1"
            className="relative block h-10 px-6 tab-personal rounded-full"
          >

            <span className="text-white-800 hidden sm:block">Pasatiempo</span>
            <span className="text-white-800 sm:hidden">T.Libre</span>
          </button>
        </div>

        <div className="mt-6 p-3 relative rounded-3xl bg-black/50">
            <div
                role="tabpanel"
                id="panel-1-personal"
                className="tab-panel-personal p-6 transition duration-300"
            >
                <div className="grid grid-cols-4 gap-4 items-center">
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Organizacion</p>
                    <img src={organizacion} alt="CSS" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Motivacion</p>
                    <img src={motivacion} alt="JavaScript" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Pasiencia</p>
                    <img src={pasiencia} alt="React" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Responsabilidad</p>
                    <img src={responsabilidad} alt="HTML" className="w-16 h-16 object-cover" />
                </div>
                </div>
            </div>

            <div
                role="tabpanel"
                id="panel-2-personal"
                className="absolute top-0 invisible opacity-0 tab-panel-personal p-6 transition duration-300"
            >
                <div className="grid grid-cols-4 gap-4 items-center">
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Comunicacion</p>
                    <img src={comunicacion} alt="CSS" className="w-16 h-16 object-cover " />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Creativo</p>
                    <img src={creativo} alt="JavaScript" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Dedicado</p>
                    <img src={dedicado} alt="React" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Participacion</p>
                    <img src={teamwork} alt="HTML" className="w-16 h-16 object-cover" />
                </div>
                </div>
            </div>

            <div
                role="tabpanel"
                id="panel-3-personal"
                className="absolute top-0 invisible opacity-0 tab-panel-personal p-6 transition duration-300"
            >
                <div className="grid grid-cols-4 gap-4 items-center">
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Mascota</p>
                    <img src={mascota} alt="CSS" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Karate</p>
                    <img src={karate} alt="JavaScript" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Juegos</p>
                    <img src={game} alt="React" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='pt-2 text-center hidden lg:block'>Peliculas/Series</p>
                    <img src={pelicula} alt="HTML" className="w-16 h-16 object-cover" />
                </div>
                </div>
            </div>

          
        </div>
      </div>
    </div>
  );
};

export default TabsPersonal;
