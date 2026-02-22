// Componente de la clase 2

// Item list container es mi contenedor de todos los productos del ecommerce
// Es un componente contenedor (smart component), se encarga de hacer la lógica

// Tiene que recibir una prop que se la pasa el padre app
// Es el encargado de pensar. No hace map. Lo hace itemList (que es su hijo)
// Va a llamar a un promesa de ka función getproducts, la va a procesar con el método then

// Para poder guardar los productos del ecommerce voy a tener que usar un estado
// Para poder procesar y actualizar el estado voy a tener que usar un efecto
// Para ello importo el useState y el useEffect

import { useState,useEffect } from "react"
import { getProducts } from "../mock/asyncMock"
import Itemlist from "./ItemList"
// Componente de clase 5
import { useParams } from "react-router-dom"
import Input from "../examples/Input"

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

    // Agregado clase 3

    // Creo un estado data. Lo inicializo como un array(lista) vació, porque voy a guardar
    const [data, setData] = useState([])

    // Si yo imprimo getProducts() sin tratar la promesa con then me va a devolver la promesa Promise="pending"
    //console.log(getProducts())

    // UseEffect trata mi promesa creada en asyncmock que retorna getProducts
    // O sea cuando llamo a getProducts() se retorna una promesa
    // Dejo el array de dependencias vacío

    // Agregado clase 5 
    // Uso el hook useParams para leer las rutas dinámicas. En este caso el path /:type
    // El use param lee el dato que cambia en la url (/:type)
    // Hago el destructuring
    const {type} = useParams()

    useEffect(()=>{
        // Llamo a la función importada de asynmock getProducts()
        // Pedimos datos del objeto
        getProducts()
        // Tratamos la respuesta. A la respuesta la veo por consola.
        // Este es el caso que la respuesta sea satisfactoria imprimo en consola
        // .then((res)=> console.log(res,"respuesta OK"))
        // En el caso de que quiera guardar la respuesta en un estado
        // Data pasa a guardarse en un estado que arranca con un array vacío
        .then((res)=> {
            if (type){
                setData(res.filter((prod)=> prod.category === type))

            }else{
                setData(res)
            }
        })
        // Atrapamos el error. Si sale mal imprimo el error por consola
        // Queda a la escucha de type
        .catch((error)=> console.log(error,"error"))
    },[type])
   

    return(
        // Este es el render, es el html que devuelve el componente
        <div>
            
            {/* Ejemplo de la clase 5 */}
            {/* <Input/> */}

            <h1>{props.mensaje}</h1>
            <h2>{type && <span>Categoria: {type}</span>}</h2>
            {/* a data le hago el método map y lo guardo en prod. Luego el resultado lo imprimo en un párrafo */}
            {/* prod es una variable que map va a estar usando */}
            {/* Tengo que usar la key para que no me devuelva el error */}
            {/* React internamente necesita que le pase ese parámetro key */}
            {/* {data.map((prod)=><p key={prod.id}>{prod.name}</p> )} */}

            {/* el map no lo hace itemListContainer. Le pasa la prop a ItemList  */}
            {/* le paso por prop el array data */}
            <Itemlist data={data}/>
        </div>
    )
}


export default ItemListContainer