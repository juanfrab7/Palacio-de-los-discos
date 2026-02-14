import React, { useEffect, useState } from "react";
import FetchList from "./FetchList";

const FetchApi = () => {
    // Este es nuestro componente contenedor. Se encarga de pensar.Maneja dos hooks
    // Voy a necesitar un estado. La actividad pide que haga un map

    // El hook UseState me sirve para guardar la información y poder utilizarla
    // El hook UseEffect para pedirlos datos, traducirlos y guardarlos en ese estado para que no renderice 
    // Uso el hook UseState. Inicializo el valor inicial como un array vacío
    // En personajes se guarda el estado de la variable
    // La variable se puede cambiar con setpersonajes
    const [personajes,setPersonajes]= useState([])
    // Hago un useEffect para cuando se monte el componente solicitar los datos a la api una sola vez
    useEffect(()=>{
        // Pido los datos de los personajes
        fetch("https://rickandmortyapi.com/api/character")
        // Trato la promesa que nos devuelve fetch
        .then((res)=>res.json())
        // .json nos devuelve otra promesa. La parseo
        // Acá uso la función modificadora setpersonajes a info.results. Results es una parte del objeto
        .then((info) => setPersonajes(info.results))
        .catch((error)=>console.log(error))


    },[])
    // Imprimo el estado del useState personajes
    console.log(personajes)

    return(
        <div>
            <h2>FetchApi</h2>
            // Importo FetchList y le paso la información de personajes
            <FetchList personajes={personajes}/>
        
        
        </div>
    )
}

export default FetchApi