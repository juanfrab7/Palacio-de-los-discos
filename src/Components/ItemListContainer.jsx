// Item list container es mi contenedor de productos
// Es el encargado de pensar. No hace map. Lo hace itemList
// Va a llamar a un promesa , la va a procesar con el método then

import { useState,useEffect } from "react"
import { getProducts } from "../mock/asyncMock"



const ItemListContainer = (props) => {


    // Creo un estado data. Lo inicializo un un array(lista) vació, porque voy a guardar
    const [data, setData] = useState([])



    // UseEffect trata mi promesa de asyncmock
    // Dejo el array de dependencias vacío
    useEffect(()=>{
        // Pedimos datos
        getProducts()
        // Tratamos la respuesta
        .then((res)=> console.log(res,"respuesta"))
        // Atrapamos el error
        .catch((error)=> console.log(error,"error"))
    },[])



    return(
        // Este es el render
        <div>
            {/* Tengo que usar la key para que no me devuelva el error */}
            <h1>{props.mensaje}</h1>
        </div>
    )
}


export default ItemListContainer