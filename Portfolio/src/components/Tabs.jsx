import { useEffect } from 'react';
// Iconos tecnicos
import hmlt from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import php from '../assets/php.png'
import react from '../assets/react.png'
import taiwind from '../assets/taiwind.png'
import mysql from '../assets/mysql.png'
import boostrap from '../assets/boostrap.png'


const Tabs = () => {
    
  useEffect(() => {
    let tabs = document.querySelectorAll(".tab");
    let indicator = document.querySelector(".indicator");
    let panels = document.querySelectorAll(".tab-panel");

    indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
    indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + 'px';
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

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
    
    <div className="lg:max-w-3xl mx-auto lg:px-8 ">
    {/* Contenido  */}
        <div className="mx-auto">
            <div 
                role="tablist"
                aria-label="tabs"
                className="relative lg:w-max mx-auto lg:h-12  grid grid-cols-3 items-center px-[3px] rounded-full  bg-black/50 overflow-hidden shadow-2xl shadow-900/20 transition"
            >
                {/* Resaltador */}
                <div className="absolute indicator h-10 my-auto top-0 bottom-0 left-0 rounded-full  shadow-md activity btn"></div>
                <button
                role="tab"
                aria-selected="true"
                aria-controls="panel-1"
                id="tab-1"
                tabindex="0"
                className="relative block h-10  tab rounded-full"
                >
                <span className="lg:text-white-800 ">Front-end</span>
                </button>
                <button
                role="tab"
                aria-selected="false"
                aria-controls="panel-2"
                id="tab-2"
                tabindex="-1"
                className="relative block h-10 tab rounded-full"
                >
                <span className="text-white-800">Backe-end</span>
                </button>
                <button
                role="tab"
                aria-selected="false"
                aria-controls="panel-3"
                id="tab-3"
                tabindex="-1"
                className="relative block h-10 px-6 tab rounded-full"
                >
                <span className="text-white-800 hidden sm:block">Base de Datos</span>
                <span className="text-white-800 sm:hidden">DB</span>

                </button>
            </div>

            {/* Contenido  */}
            <div className="mt-6 relative rounded-3xl bg-black/50 ">
                <div
                role="tabpanel"
                id="panel-1"
                className="tab-panel p-6 transition duration-300"
                >
                    <div className="grid  grid-cols-4 gap-4 items-center">
                        <div className="w-3/4 lg:w-1/2">
                            <img src={hmlt} alt="HTML"/>
                        </div>
                        <div className="w-3/4 lg:w-1/2">
                            <img src={css} alt="CSS"/>
                        </div>
                        <div className="w-3/4 lg:w-1/2">
                            <img src={js} alt="JavaScript"/>
                        </div>
                        <div className="w-3/4 lg:w-1/2">
                            <img src={react} alt="React"/>
                        </div>
                        <div className="w-3/4 lg:w-1/2">
                            <img src={taiwind} alt="Tailwind CSS"/>
                        </div>
                        <div className="w-3/4 lg:w-1/2">
                            <img src={boostrap} alt="Bootstrap"/>
                        </div>
                    </div>
                </div>

                <div
                role="tabpanel"
                id="panel-2"
                className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
                >
                <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="w-3/4 lg:w-1/2">
                        <img src={js} alt="JavaScript"/>
                    </div>
                    <div className="w-4/4 lg:w-1/2">
                        <img src={php} alt="PHP"/>
                    </div>

                    </div>
                </div>

                <div
                role="tabpanel"
                id="panel-3"
                className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
                >
                <div className="grid grid-cols-4 gap-4 items-center">

                    <div className="w-4/4 lg:w-1/2">
                        <img src={mysql} alt="MySQL"/>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabs;
