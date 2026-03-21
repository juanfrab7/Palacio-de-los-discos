import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = ({text}) => {
  // Recibo la prop text de ItemListContainer
  return (
    // Pongo para que el spinner me quede centrado
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Spinner animation='border' variant='dark'/>
        {/* Acá usa la prop que se manda en ItemListContainer */}
        <span>{text}</span>
    </div>
  )
}

export default Loader