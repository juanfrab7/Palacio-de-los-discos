import { useEffect, useState } from "react"

// Un custom Hook es una función que permite reutilizar lógica en varios componentes.
// Es una forma de extrar parte del código de un lado para no repetirlo en otro
// Tiene la particularidad que cuando arme una función y empieza con la palabra use React entiende que es un custom hook

// La tarea principal del hook useFetch va a ser obtener datos de una api
// El hook va a tener estados
// Como no sé que me va a devolver la api, hago un seteo genérico y lo incializo en null

// useFetch espera que me manden información. Coloco el argumento url
export const useFetch = (url) =>{

    const[data,setData] = useState(null);
    const[loading,setLoading] = useState(true)
    // Tengo un estado para registrar los errores, lo inicializo en null
    const[error,setError] = setError(null);

    // Necesito que el useEffect se ejecute cada vez que la url de argumento cambie.
    // Pongo en el array de dependencias que este a la escucha de cambio de url [url]

    useEffect(()=>{
        fetch(url)
        // El método fetch espera una promesa
        .then((res)=>res.json())
        .then((info)=> setData(info))
        .catch((error)=> setError(error))
        // por último apagamos el loading sin importar que caiga en el then o en el catch
        .finally(()=>setLoading(false))
    })


    return{data,loading,error}
}