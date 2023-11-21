import React from 'react'
import Nuevopresupuesto from './Nuevopresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({
    gastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    setGastos,

}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                presupuesto = {presupuesto}
                setGastos={setGastos}
                gastos={gastos}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ) : (
                <Nuevopresupuesto
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
           
        </header>

    )
}

export default Header