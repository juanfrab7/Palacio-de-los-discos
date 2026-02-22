// Componente de clase 3


// ItemList es un agrupador de un set de componentes Item.jsx (de las cards)
// ItemList recibe una prop de ItemListContainer
// Acá se hace el map. Por cada elemento del array un componente item

import React from "react";
import Item from "./Item"
import { Button } from "react-bootstrap";

// Se pasa la prop data
const ItemList = ({data}) =>{

    return (
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>
            {/* esto te muestra todos los productos */}
            {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
            
        </div>
        
    )
}

export default ItemList