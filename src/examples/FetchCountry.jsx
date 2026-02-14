import {useEffect} from "react"
// Creo el componente, lo exporto y lo pongo dentro de app.jsx  dentro del return
// El hook que uso para el trabajo asíncrono es el useeffect. 
// El fetch se hace una sola vez cuando se monta el componente

const FetchCountry = () => {

        // dentro del componente establezco el hook
        // Como quiero que se ejecute una sola vez pongo el array de dependencias vacío []

        useEffect(()=>{
            // Dentro del hook hago el fetch. Cuando no pongo nada entiende que es get
            fetch("https://restcountries.com/v3.1/name/chile")
            // Fetch responde con una promesa, por lo que la trato con un then
            // Para poder entender la respuesta tengo que parsearlo con un método json
            .then((response)=>response.json())
            
            .then((data)=>console.log(data[0].capital))
            .catch((error)=> console.log(error))
            
            
        },[])

    return(
        <div>FetchCountry</div>
    )
}

export default FetchCountry

