// CartView
// Componente de clase 6

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
  // Me traijo los datos, el clear para borrar todo el carrito y remove para borrar un elemento
  const {cart, clear, removeItem}= useContext(CartContext)
  // Acá muestro el carrito
  return (
    <div>
      <h1>Carrito de compras online 💿</h1>

    <div>
      
      { // Hago un map, y por cada componente muestro un div con los detalles
        cart.map((compra)=> (
          <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
            <img src={compra.img} alt={compra.name} style={{width:'12rem'}}/>
            <span><strong>Producto:</strong> {compra.nombreDisco}</span>
            <span><strong>Precio:</strong> {compra.price?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</span>
            <span><strong>Cantidad:</strong> {compra.quantity}</span>
            {/* Calculo el total operando con compra.price y compra.quantity */}
            <span><strong>Total:</strong> {(compra.quantity * compra.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</span>
            {/* Botón para eliminar un item. Llamo a una función anónima y borro compra.id */}
            <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
          </div>
        ))
      }
    </div>
    {/* Función clase 7*/}
    <span>Total a pagar: </span>

    {/* Muestro los botones de Vaciar el carrito y terminar compra */}
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
      {/* se usa la función clear cuando presiono el botón Vaciar Carrito */}
      <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
      <button className='btn btn-success'>Terminar compra</button>
    </div>
    </div>
  )
}

export default CartView