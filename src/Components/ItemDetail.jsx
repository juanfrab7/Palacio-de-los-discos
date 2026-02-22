// Componente de clase 4

// Recibe la prop (detalle) de su padre ItemDetailContainer y va a mostrar la vista del item
// Muestra foto, detalle , contador
// Va a mostrar lo que el padre ItemDetailContainer maneje

// ItemDetail tiene como hijo a ItemCount

import React from "react";
import ItemCount from "./ItemCount";


// Esto viene por props de ItemDetailContainer
const ItemDetail = ({detalle}) =>{

    // Función de la clase 5. Me va a pasar la información de cuantos items desea la persona

    // En clase 6 con context se va a agregar el item al carrito
    const onAdd = (cantidad) =>{

        console.log(`Agregaste al carrito ${cantidad} de unidades de ${detalle.nombreDisco}`)
    }

    return(
        <div>
            {/* Se van a observar datos que vienen del asyncMock */}
            <h1>Detalle de {detalle.nombreDisco}</h1> 
            <img src={detalle.img} alt={detalle.nombreDisco} />  
            <p>Banda: {detalle.nombreBanda}</p>
            <p>Genero: {detalle.description}</p> 
            <p>Precio: {detalle.price?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</p>
            <p>Stock disponible: {detalle.stock}</p>
            {/* Acá va el contador */}
            {/* Clase 5 le paso la función onAdd por prop a ItemCount y el stock */}
            {/* Esto lo tengo que tomar en ItemCount */}
            <ItemCount onAdd={onAdd} stock={detalle.stock}/>
            
        </div>
    )
}

export default ItemDetail

