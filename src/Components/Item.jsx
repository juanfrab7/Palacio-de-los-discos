// Componente de la clase 3

import React from "react";
import { Button, Card } from "react-bootstrap";
// Importo link de la clase 5
import {Link} from "react-router-dom"

// Este componente muestra información breve del producto que el usuario clickea luego para acceder a detalles

// Este item va a ser una card. Importo las cards de bootstrap

// Aca puedo poner en tarjetas los productos con su precio, descripción
// Recibe props
const Item = ({prod}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombreDisco}</Card.Title>
        <Card.Subtitle>{prod.nombreBanda}</Card.Subtitle>
        <Card.Text>
           {prod.price.toLocaleString('es-AR', { 
              style: 'currency', 
              currency: 'ARS', 
              minimumFractionDigits: 0 
            })}
        </Card.Text>
        {/* Configuro mi botón con enlaces Link de react Router dom */}
        <Link className="btn btn-success" to={`/item/${prod.id}`}>Comprar</Link>
      </Card.Body>
    </Card>

  )
}

export default Item;