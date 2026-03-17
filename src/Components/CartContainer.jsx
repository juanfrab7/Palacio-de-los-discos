// CartCointainer
// Componente de la clase 6
// Es el padre de CartView

import React, { useContext } from 'react'
import CartView from './CartView'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
const CartContainer = () => {
const {cart}= useContext(CartContext)
  return (
    <>
    {
        // Pongo un condicional que me muestra el carrito solo si el carrito tiene elementos
        // Si no tiene elementos (si el array no tiene longitud) muestro el componente emptycart
        !cart.length
        ? <EmptyCart/>
        // Si el carrito no está vació muestro el componente CartVier
        : <CartView/>
    }
   
    </>
  )
}

export default CartContainer