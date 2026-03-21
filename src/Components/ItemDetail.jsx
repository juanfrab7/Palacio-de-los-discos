// ItemDetail
// Componente de clase 4

// Recibe la prop (detalle) de su padre ItemDetailContainer y va a mostrar la vista del item
// Muestra foto, detalle , contador
// Va a mostrar lo que el padre ItemDetailContainer maneje
// Maneja la lógica del carrito

// ItemDetail tiene como hijo a ItemCount

import React, { useState } from "react";
import ItemCount from "./ItemCount";

// Clase 6: Importo el contexto (cartContext) y el hook (useContext) para usar el contexto
// Uso los elementos sin pasar por el padre ItemDetailContainer
// CartContext viene del método createContext()
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// Para ir al carrito
import { Link } from 'react-router-dom'
import './ItemDetail.css';

// Esto viene por props de ItemDetailContainer
const ItemDetail = ({detalle}) =>{

    // Función de la clase 5. Me va a pasar la información de cuantos items desea la persona

    // Función de la clase 6
    // Llamo al hook useContext. Le paso como argumento CartContext
    // Contexto es un objeto que tiene dentro por ejemplo cart que es un array 
    // Con destructuring rescato cart, que es un array (lista)
    // Del contexto (CartContext) me traigo la función addItem. addItem la uso en la función onAdd
    const {cart,addItem,itemQuantity} = useContext(CartContext)

    // Cuando compro algo , itemCount debe desaparecer
    // Creamos un estado Purchase pongo el estado true si
    // Lo inicializo en False
    // Si la persona compra un item, pongo purchase en True en onAdd
    const [purchase,setPurchase] =useState(false)
    

    // En clase 6 con context se va a agregar el item al carrito
    // A onAdd lo llama la función comprar de ItemCount con un argumento de count 
    console.log(cart)
    const onAdd = (cantidad) =>{

        console.log(`Agregaste al carrito ${cantidad} de unidades de ${detalle.nombreDisco}`)
        // Llamo a la función addItem con los argumentos detalle y cantidad
        // detalle viene de y cantidad es un argumento de onAdd
        addItem(detalle,cantidad)
        // Si compro paso setPurchase a True
        setPurchase(true)
    }

    const stockActualizado = detalle.stock - itemQuantity(detalle.id)

    return(
        
        <div className="detail-container">
            {/* Se van a observar datos que vienen del asyncMock / Firebase */}
            <img className="detail-img" src={detalle.img} alt={detalle.nombreDisco} />

            <div className="detail-info">
                <h1 className="detail-title">{detalle.nombreDisco}</h1>

                <div className="detail-data-block">
                    <strong>Artista: </strong>
                    <span>{detalle.nombreBanda}</span>
                </div>

                <div className="detail-data-block">
                    <strong>Género: </strong>
                    <span>{detalle.description}</span>
                </div>

                <div className="detail-data-block">
                    <strong>Precio: </strong>
                    <span className="detail-price">
                        {detalle.price?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}
                    </span>
                </div>

                <div className="detail-data-block">
                    <strong>Stock disponible: </strong>
                    <span>{stockActualizado} unidades</span>
                </div>
                {/* Acá va el contador */}
                {/* Clase 5 le paso la función onAdd por prop a ItemCount y el stock */}
                {/* Esto lo tengo que tomar en ItemCount */}

                {/* Clase 6. Hago un render condicional en base al estado de purchase */}

                <div className="detail-actions">
                    {purchase ? (
                        <Link className='btn-ir-carrito' to="/cart">Ir al carrito 🛒</Link>
                    ) : (
                        <ItemCount onAdd={onAdd} stock={stockActualizado} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

