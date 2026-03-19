// Checkout
// Componente clase 7

import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import './Checkout.css';


const Checkout = () => {
    const [buyer, setBuyer]= useState({})
    // Capturar un input
    const [validMail, setValidMail]= useState('')
    // Para el caso de que se haya realizado bien la compra
    const [orderId, setOrderId]= useState('')
    // Esta variable es por el delay cuando aprieto el botón de comprar. No se genera inmediatamente la orden
    const [loading, setLoading]= useState(false)
    // Con esta variable manejo que el usuario haya completado el formulario. Comienza como que no lo completó
    const [error, setError]= useState(null)
    // Necesito del carrito y de estas  funciones, por eso las llamo con context
    const {cart, total, clear}= useContext(CartContext)

    // Función buyerData
    const buyerData = (e)=>{
        setBuyer(
            {
                // Lo que tengo en buyer le agrego
                ...buyer, 
                // Creo las propiedades dinámicas
                [e.target.name]: e.target.value
            }
        )
    }

   
    // Esta función se activa cuando se termine de completar el formulario
    const terminarCompra = (e)=> {
        // Tengo que prevenir que cuando se cargue el formulario se resetee el componente
        // Para solucionarlo uso el método preventDefault
        e.preventDefault()
       // Valido que existan y estén completados todos los campos del formulario
       if(!buyer.name || !buyer.lastname || !buyer.address || ! buyer.email || ! validMail){
        setError('Por favor complete el formulario')
       } // Caso que no coincidan los correos
       else if (buyer.email !== validMail){
        setError('Los correos no coinciden')
       }else{
        setError(null)
        // Acá cuando se valida y carga loading pasa a true
        setLoading(true)
         let orden={
            // Genero el objeto que se va a mandar a firebase
            comprador:buyer,
            // cart lo traigo con context
            carrito: cart,
            // total es una función. a total hay que ejecutarla ya que firebas no acepta funciones
            total: total(),
            // Esta función se importa de firebase. Me da el tiempo
            fecha: serverTimestamp()
        }

        // Creo una referencia de la colección. db es el proyecto
        // El método collection es de firestore
        // Creo la ordenes, como no existe la llamará orders
        const orderColl = collection(db, "orders")
        // agrego el doc. Creo el documento con el metodo addDoc de firebase
        // El producto que yo quiero agregar está en orden
        addDoc(orderColl, orden)
        // Devuelve una promesa
        .then((res)=>{
            // La variable orderID se queda con el valor de la respuesta .id
            setOrderId(res.id)
            // Si la orden se generó borro todo el carrito
            clear()
        })
        .catch((error)=> console.log(error))
        // La variable a loading cuando termina el proceso pasa a False
        .finally(()=> setLoading(false))
       }
    }

    // No puedo generar la orden si el carrito está vacío o si el formulario no está completado
    // Entonces valido si el carrito está vacío con lenght y valido que no se haya generado la orden
    // Esto lo hago con render condicional
    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

  return (
    <>
    {
        orderId 
        ? <div>
            {/* Este es el caso de que orderId exista. No le muestro el formulario */}
            <h1>Muchas gracias. En breve te llegará tu compra 🎸 </h1>
            {/* Le muestro al usuario el número de orden */}
            <h3>Su orden es: {orderId}</h3>
            {/* Creo un botón para que el usuario vuelva a la home */}
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
        // Caso que la orden no exista
        : <div className="form-container">
        <h1 className="form-title">Llena tus datos para finalizar la compra</h1>

        {/* Acá hago un condicional para mostrar el caso de error */}
        {error && <span className="error-msg">{error}</span>}
        
        {/* Acá está el evento onSubmit que cuando sucede corre la función terminarCompra  */}
        <form className='p-4 border rounded shadow-sm' onSubmit={terminarCompra}>


                {/* Con onChange registro los datos del formulario. La idea es generar una orden en Firebase
                Los guardo en el estado validName */}
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    {/* Con onChange llamo a la función buyerData */}
                    <input name='name' placeholder='Ingrese su nombre' className='form-control' type="text" onChange={buyerData} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apellido:</label>
                    <input name='lastname' placeholder='Ingrese su apellido' className='form-control' type="text" onChange={buyerData}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección:</label>
                    <input name='address' placeholder='Ingrese su dirección' className='form-control' type="text" onChange={buyerData}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Correo electrónico:</label>
                    <input name='email' placeholder='Ingrese su correo' className='form-control' type='email' onChange={buyerData}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Volvé a ingresar tu correo electrónico:</label>
                    {/* Acá valido el mail con Onchange */}
                    <input name='secondemail' placeholder='Reingrese el correo' className='form-control' type="email" onChange={(e)=> setValidMail(e.target.value)} />
                </div>
                {/* El botón desaparece según el valor de Loading, en caso de que esté en True */}
                <button type='submit' className='btn btn-success' disabled={loading}>
                {/* Cambio el texto del botón según el estado de Loading */}
                {loading ? 'Procesando la orden' : 'Generar Orden'}
                </button>
        </form>
    </div>

    }
    </>
  )
}

export default Checkout