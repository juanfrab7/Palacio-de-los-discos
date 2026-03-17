// Componente de la clase 2

import { useContext } from "react"
import { CartContext } from "../context/CartContext"

// CartWidget se renderiza en el NavBar , no en app. O sea es hijo directo de NavBar
// Muestra el ícono del carrito y una burbuja de notificación originalmente con un valor estático (hardcodeado)

// Clase 6
// Muestra la sumatoria de cantidades

const CartWidget = () => {

    // Destructuring de cart. El NavBar está dentro de cartProvider
    const {cart} = useContext(CartContext)
    return(
        <div>
            {/* logo del carrito */}
            <span>🛒</span>
            {/* Burbuja de notificación: numero estático por el momento */}
            <span style={{color: 'whitesmoke',backgroundColor:"red"}}>5</span>
        </div>
    )
}

export default CartWidget