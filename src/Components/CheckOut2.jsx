// Checkout
// Componente clase 7

import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'


const Checkout = () => {
    const [buyer, setBuyer]= useState({})
    const [validMail, setValidMail]= useState('')
    const [orderId, setOrderId]= useState('')
    const [loading, setLoading]= useState(false)
     const [error, setError]= useState(null)
    const {cart, total, clear}= useContext(CartContext)

    const buyerData = (e)=>{
        setBuyer(
            {
                ...buyer, 
                [e.target.name]: e.target.value
            }
        )
    }

   

    const terminarCompra = (e)=> {
        e.preventDefault()
       if(!buyer.name || !buyer.lastname || !buyer.address || ! buyer.email || ! validMail){
        setError('Por favor complete el formulario')
       }else if (buyer.email !== validMail){
        setError('Los correos no coinciden')
       }else{
        setError(null)
        setLoading(true)
         let orden={
            comprador:buyer,
            carrito: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const orderColl = collection(db, "orders")
        //agrego el doc
        addDoc(orderColl, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
       }
    }

    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

  return (
    <>
    {
        orderId 
        ? <div>
            <h1>Muchas gracias por tu compra! 🥳</h1>
            <h3>Su orden es: {orderId}</h3>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
        : <div>
        <h1>Llena tus datos para finalizar la compra</h1>
        {error && <span style={{color:'red', fontWeight:'bold'}}>{error}</span>}
        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={terminarCompra}>

                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
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
                    <input name='secondemail' placeholder='Reingrese el correo' className='form-control' type="email" onChange={(e)=> setValidMail(e.target.value)} />
                </div>

                <button type='submit' className='btn btn-success' disabled={loading}>{loading ? 'Procesando la orden' :  'Generar Orden'}</button>
        </form>
    </div>

    }
    </>
  )
}

export default Checkout