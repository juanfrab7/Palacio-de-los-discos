// Componente clase 4

// Funciona parecido a ItemListContainer
// Cuando se monta debe llamar a un async mock , que en 2 segundos debe devolver 1 item
// Lo devuelve con la función getItem, una promesa y un método find que se le hace al objeto de productos

// y lo guarde en estado prop
// ItemDetailContainer va a invocar eso (mock) y lo va tratar con un then y lo vaa guardar el resultado en un estado. 
// Eso se lo va a pasar a otro componente ItemDetail

// Importo los hooks useState y useEffect
// Importo de mock el método getItem

import {useEffect,useState} from "react"
import { getItem } from "../mock/asyncMock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{

        // Uso un useState y lo inicializo con un objeto vacío
        const [detalle,setDetalle] = useState({})
        // Cuando se monte el componente, llamamos una sola vez a la función getitem. 
        // Se deja el Array de dependencias vacío para que lo haga solo cuando se monte el componente
        useEffect(()=>{
            // Llamo a la función getItem con el argumento hardcodeado de id = "02"
            getItem("02")
            // getItem retorna una promesa. 
            // A la respuesta que es un objeto Lo guardo en el hook useState
            .then((res)=> setDetalle(res))
            .catch((error)=> console.log(error))


        },[])

    return(
        // Retorna ItemDetail con la prop detalle que viene del hook UseState. 
        // detalle lo tengo que llevar a ItemDetail
        // detalle es un objeto
        <div>
            <ItemDetail detalle = {detalle}/>
        </div>
    )
}



// const getItem = () =>{

//     // Retorna con una promesa... hook
// }

// function ItemDetailContainer = {

//     pass
// }

export default ItemDetailContainer