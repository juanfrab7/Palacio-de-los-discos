// Componente clase 4

// Funciona parecido a ItemListContainer
// Cuando se monta debe llamar a un async mock , que en 2 segundos debe devolver 1 item
// Lo devuelve con la función getItem, una promesa y un método find que se le hace al objeto de productos
// y lo guarde en estado prop

// ItemDetailContainer va a invocar eso (mock) y lo va tratar con un then y lo vaa guardar el resultado en un estado. 
// Eso se lo va a pasar a otro componente ItemDetail

// ItemDetailContainer tiene como hijo a ItemDetail

// Importo los hooks useState y useEffect
// Importo de mock el método getItem

import {useEffect,useState} from "react"
import { getItem } from "../mock/asyncMock"
import ItemDetail from "./ItemDetail"
// Hook clase 5
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{

        // Uso un useState y lo inicializo con un objeto vacío
        const [detalle,setDetalle] = useState({})
        // param tendrá el valor que esté en la url
        // Hago un destructuring y me quedo con el id. id tiene que quedar igual como lo declaré en app
        const {id} = useParams()
        
        // Cuando se monte el componente, llamamos una sola vez a la función getitem. 
        // Se deja el Array de dependencias vacío para que lo haga solo cuando se monte el componente
        
        useEffect(()=>{
            // Clase 4: Llamo a la función getItem con el argumento hardcodeado de id = "02"
            // getItem("02")
            // Clase 5: Traigo el id del useParams y lo pongo como argumento en la función getItem
            // Clase 5: El useEffect queda a la escuchar del cambio de el id
            getItem(id)
            // getItem retorna una promesa. 
            // A la respuesta que es un objeto Lo guardo en el hook useState
            .then((res)=> setDetalle(res))
            .catch((error)=> console.log(error))


        },[id])

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