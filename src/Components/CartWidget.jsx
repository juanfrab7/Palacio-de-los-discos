// Componente de la clase 2

// CartWidget se renderiza en el NavBar , no en app
// Muestra el ícono del carrito y una burbuja de notificación con un valor estático (hardcodeado)

const CartWidget = () => {
    return(
        <div>
            {/* logo del carrito */}
            <span>🛒</span>
            {/* numero estático por el momento */}
            <span style={{color: 'whitesmoke',backgroundColor:"red"}}>5</span>
        </div>
    )
}

export default CartWidget