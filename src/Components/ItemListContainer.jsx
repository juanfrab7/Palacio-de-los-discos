// Componente de la clase 2

// Item list container es mi contenedor de todos los productos del ecommerce
// Es un componente contenedor (smart component), se encarga de hacer la lógica

// Tiene que recibir una prop que se la pasa el padre app
// Es el encargado de pensar. No hace map. Lo hace itemList
// Va a llamar a un promesa , la va a procesar con el método then

// Para poder guardar los productos del ecommerce voy a tener que usar un estado
// Para poder procesar y actualizar el estado voy a tener que usar un efecto
// Para ello importo el useState y el useEffect

import { useState,useEffect } from "react"
import { getProducts } from "../mock/asyncMock"



const ItemListContainer = (props) => {



    // Ejemplo explicación promesa clase 3
    // const miPromesa = new Promise ((resolve,reject)=>{
    //     let todoOK = true
    //     // logica 
    //     if (todoOK){
    //         resolve("salio bien")

    //     }else{
    //         reject("salió mal, hubo un error")
    //     }
    
    // })
    // console.log(miPromesa)
    // miPromesa.then((res)=> console.log(res),"respuesta")
    // miPromesa.catch((error)=> console.log(error,"error"))

    // Creo un estado data. Lo inicializo como un array(lista) vació, porque voy a guardar
    const [data, setData] = useState([])



    // UseEffect trata mi promesa creada en asyncmock que retorna getProducts
    // Dejo el array de dependencias vacío
    useEffect(()=>{
        // Pedimos datos
        getProducts()
        // Tratamos la respuesta. A la respuesta la veo por consola.
        .then((res)=> console.log(res,"respuesta"))
        // Atrapamos el error. Si sale mal imprimo el error por consola
        .catch((error)=> console.log(error,"error"))
    },[])

    

    return(
        // Este es el render, es el html que devuelve el componente
        <div>
            {/* Tengo que usar la key para que no me devuelva el error */}
            <h1>{props.mensaje}</h1>
        </div>
    )
}


export default ItemListContainer