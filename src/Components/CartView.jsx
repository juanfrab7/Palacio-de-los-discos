// CartView
// Componente de clase 6

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
// Para enlace formulario 
import { Link } from 'react-router-dom'
import './CartView.css';

const CartView = () => {
  // Me traigo los datos, el clear para borrar todo el carrito y remove para borrar un elemento
  // También la función total 
  const {cart, clear, removeItem, total}= useContext(CartContext)
  // Acá muestro el carrito
  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito de compras online 💿</h1>

    <div className="cart-list">
      
      { // Hago un map, y por cada componente muestro un div con los detalles
        cart.map((compra)=> (
          <div key={compra.id} className="cart-item">
            <img src={compra.img} alt={compra.name} style={{width:'12rem'}}/>
            <div className="cart-item-info">
              <div className="cart-data-block">
                <strong>Producto:</strong>
                <span>{compra.nombreDisco}</span>
              </div>

              <div className="cart-data-block">
                <strong>Precio:</strong>
                <span>{compra.price?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</span>
              </div>

              <div className="cart-data-block">
                <strong>Cantidad:</strong>
                <span>{compra.quantity}</span>
              </div>

              {/* Calculo el total operando con compra.price y compra.quantity */}
              <div className="cart-data-block">
                <strong>Subtotal:</strong>
                <span>{(compra.quantity * compra.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</span>
              </div>

              
              
            </div>
            {/* Botón para eliminar un item. Llamo a una función anónima y borro compra.id */}
            <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>ELIMINAR</button>
          </div>
        ))
      }
    </div>

    {/* Función clase 7*/}
    {/* Total es una función, no una variable */}
    <span className="cart-total-display">Total a pagar: {total().toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</span>

    {/* Muestro los botones de Vaciar el carrito y terminar compra */}
    <div className="cart-buttons-container">
      {/* se usa la función clear cuando presiono el botón Vaciar Carrito */}
      <button className="btn-custom btn-vaciar" onClick={clear}>VACIAR CARRITO</button>
      {/* <button className='btn btn-success'>Terminar compra</button> */}
      {/* Enlace para terminar la compra -> Lleva al checkout */}
      <Link className="btn-custom btn-finalizar" to='/checkout'>Terminar compra</Link>
    </div>
    </div>
  )
}

export default CartView