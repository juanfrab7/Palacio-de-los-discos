// Componente de la clase 3

import React from "react";
import { Button, Card } from "react-bootstrap";
// Este componente muestra información breve del producto que el usuario clickea luego para acceder a detalles

// este item va a ser una card

// Aca puedo poner en tarjetas los productos con su precio, descripción
// Recibe props
const Item = ({prod}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombreDisco}</Card.Title>
        <Card.Text>
          $ {prod.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  )
}

export default Item;