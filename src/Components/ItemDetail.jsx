// Recibe la prop de su padre ItemDetailContainer y va a mostrar la vista del item
// Muestra foto, detalle , contador
// Va a mostrar lo que el padre ItemDetailContainer maneje

import React from "react";


// Esto viene por props de ItemDetailContainer
const ItemDetail = ({detalle}) =>{

    return(
        <div>
            {/* Se van a observar datos que vienen del asyncMock */}
            <h1>Detalle de {detalle.name}</h1> 
            <img src={detalle.img} alt={detalle.name} />  
            <p> {detalle.description}</p> 
            <p>$ {detalle.price}</p>
            <p>Stock disponible: {detalle.stock}</p>
            {/* Acá va el contador */}
        </div>
    )
}

export default ItemDetail