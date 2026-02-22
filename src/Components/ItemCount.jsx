// Componente clase 2

//importo css de la carpeta assets
import '../assets/css/ItemCount.css'

// Importo el hook useState
import { useState } from "react"

// Import de librería y componentes de la clase 5: React Router dom
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"

// Este componente se encarga de contar

// Clase 5. Le hago destructuring a las props que me pasa el padre ItemDetail
const ItemCount = ({onAdd,stock}) =>{

    // Declaro el hook useState
    // Los hooks siempre se usan en componentes
    // Se declaran en la parte superior del componente

    const [count,setCount] = useState(1)
    console.log("itemCount")

    // Voy a hacer una función para modificar el estado de count
    const sumar = ()=>{
        // El contador suma hasta llegar al valor de stock que tenemos
        if  (count< stock){
            setCount(count+1)
        }
        
    }

    const restar = ()=>{
        if (count >0){
            setCount(count-1)
        }
    }

    const comprar = ()=>{
        // Espera el valor que yo le pase. Es el valor de count
        onAdd(count)
    }

    return(

        <div className='counter-container'>
            <div className='counter-controls'>

                <button onClick={restar} className={count === 0 ? 'btn-neutro' : 'btn-restar'}>-</button>

                {/* Uso un span para separar */}
                {/* escribo el valor de count con llaves al ser codigo de javascript */}
                <span className='counter-value'>{count}</span>

                <button onClick={sumar} className="btn-sumar">+</button>
               
            </div>
            <p></p>
            <button className="btn btn-success buy-btn" onClick={comprar}>Comprar</button>
            <p></p>
            <div><Link to="/" className="btn btn-secondary">Volver al home</Link></div>

        </div>
    )
} 

export default ItemCount