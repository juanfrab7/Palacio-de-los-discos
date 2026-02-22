// Ejemplo de la clase 5
// Componente input
// Este elemento se llama e importa en ItemListContainer
// La idea del ejercicio es cancelar el evento con .preventDefault()

import React, { useState } from "react"

// Se debe escuchar el estado del input, ver que escribe la perrsona y guardarlo

const Input = () =>{
        const [name,setName] = useState("")

        // Para escuchar el evento uso una función handler
        const inputHandler = (event) =>{
            console.log(event,"evento")
            console.log(event.target,"target")
            console.log(event.target.value,"value")
            // Guardo lo que escribió el usuario (.value) en un estado
            setName(event.target.value)
        }

        const noVocales = (evento) =>{
            // Importa el evento que se produce una vez que toco una tecla
            // Acá cuando imprimo puedo ver todo lo que devuelve el console.log. Me quedo con el atributo key
            // console.log(evento)
            // Imprimo la tecla que presionó el usuario
            console.log(evento.key)
            if ("aeiou".includes(evento.key.toLowerCase())){
                console.log("Es vocal")
                // Con prevent default cancelo el evento
                evento.preventDefault()
            }



        }

    return(
        <div>
            <h1>Input</h1>
            <input className="form-control" name="nombre-completo" type="text" 
            placeholder="Ingresa tu nombre completo" onChange={inputHandler}/>
            <p>{name}</p>
            <h2>NO VOCALES</h2>
            {/* Uso el evento onKeyDown para capturar las teclas que escribo */}
            <input className="form-control" name="no-vocales" type="text" 
            placeholder="NO SE ACEPTAN VOCALES" onKeyDown={noVocales}/>
        </div>

    )
}

export default Input