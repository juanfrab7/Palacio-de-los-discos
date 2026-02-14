// Cuando se monta debe llamar a un async mock , que en 2 segundos debe devolver 1 item
// y lo guarde en estado prop
// ItemDetailContainer va a invocar eso (mock) y lo va tratar con un then y lo vaa guardar el resultado en un estado. 
// Eso se lo va a pasar a otro componente ItemDetail

import {useEffect,useState} from "react"
import { getItem } from "../mock/asyncMock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{

        // Uso un useState y lo inicializo con un objeto
        const [detalle,setDetalle] = useState({})
        // Cuando se monte el componente, llamamos a la función getitem. Array de dependencias vacío
        useEffect(()=>{
            getItem("02")
            // getItem retorna una promesa. Lo guardo en el hook useState
            .then((res)=> setDetalle(res))
            .catch((error)=> console.log(error))


        },[])

    return(
        // Retorna ItemDetail con la prop detalle que viene del hook UseState. 
        // Detalle lo tengo que llevar a ItemDetail
        <div>
            <ItemDetail detalle = {detalle}/>
        </div>
    )
}



const getItem = () =>{

    // Retorna con una promesa... hook
}

// function ItemDetailContainer = {

//     pass
// }
