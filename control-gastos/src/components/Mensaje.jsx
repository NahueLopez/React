import React from 'react'

//Indica que depende que tipo de error va a mostrar un alerta diferente

const Mensaje = ({children,tipo}) => {
  return (
    <div className={'alerta ${tipo}'}>
        {children}
    </div>
  )
}

export default Mensaje
