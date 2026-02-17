// Componente clase 2

//importo css de la carpeta assets
import '../assets/css/ItemCount.css'

// Importo el hook useState
import { useState } from "react"

const ItemCount = () =>{

    // Declaro el hook useState
    // Los hooks siempre se usan en componentes
    // Se declaran en la parte superior del componente

    const [count,setCount] = useState(1)
    console.log("itemCount")

    // Voy a hacer una función para modificar el estado de count
    const sumar = ()=>{
        setCount(count+1)
    }

    const restar = ()=>{
        if (count >0){
            setCount(count-1)
        }
        
    }

    return(

        <div>
            <button onClick={restar} className={count === 0 ? 'btn-neutro' : 'btn-restar'}>-</button>
            {/* Uso un span para separar */}
            {/* escribo el valor de count con llaves al ser codigo de javascript */}
            <span>{count}</span>
            <button onClick={sumar} className="btn-sumar">+</button>


        </div>
    )
} 

export default ItemCount