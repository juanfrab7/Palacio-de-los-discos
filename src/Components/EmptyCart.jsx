import React from 'react'
// Se importa Link para que vaya al home
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Su carrito se encuentra vacío </h1>
        <h2>Mira nuestros discos</h2>
        {/* El enlace va al home */}
        <Link className='btn btn-success' to='/'>Ir al Inicio</Link>
    </div>
  )
}

export default EmptyCart