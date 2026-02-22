// Componente clase 5

// Se usa para cuando el usuario ingresa con una url que no tengo registrada en codigo
// Manda a todas las urls no registradas y muestra este componente

import react from "react"

// Para la navegación interna importo un componente link

import { Link } from "react-router-dom"

const Error = () =>{


    return(
        <div>
            <h1>ERROR</h1>
            <Link className="btn btn-dark" to="/">Volver al home</Link>
        </div>
    )
}

export default Error