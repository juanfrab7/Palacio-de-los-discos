// Componente de clase 4

// Recibe la prop (detalle) de su padre ItemDetailContainer y va a mostrar la vista del item
// Muestra foto, detalle , contador
// Va a mostrar lo que el padre ItemDetailContainer maneje

import React from "react";
import ItemCount from "./ItemCount";


// Esto viene por props de ItemDetailContainer
const ItemDetail = ({detalle}) =>{

    return(
        <div>
            {/* Se van a observar datos que vienen del asyncMock */}
            <h1>Detalle de {detalle.nombreDisco}</h1> 
            <img src={detalle.img} alt={detalle.nombreDisco} />  
            <p> {detalle.description}</p> 
            <p>$ {detalle.price}</p>
            <p>Stock disponible: {detalle.stock}</p>
            {/* Acá va el contador */}
            <ItemCount/>
        </div>
    )
}

export default ItemDetail