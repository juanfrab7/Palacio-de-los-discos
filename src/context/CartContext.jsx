import { createContext, useState } from "react";

// Componente contexto clase 6

// Creo el contexto. Crea el espacio para compartir los datos globales
export const CartContext = createContext()

// Creo el proveedor 

export const CartProvider = ({children}) =>{

    // CartProvider es el proveedor que envuelve a la aplicación. 
    // Permite acceder al contexto desde cualquier parte

    // Dentro del proveedor van las herramientas (funciones)

    // Nuestro contexto va a estar en un estado. Acá va el carrito
    // Lo guardo en un estado como un array vacío de objetos (nombre de producto,cuanto compró)
    // La variable cart representa al carrito

    // Es el estado del carrito que guardamos y actualizamos los productos
    const [cart,setCart] = useState([])

    // Clase 6: Declaro las funciones. Las paso en el provider con en el value

    // Función Agregar item al carrito que contempla repetidos
    // Recibe el item que recibe el carrito y la cantidad qty
    // La tengo que usar en el componente ItemDetail. Por ende la importo
    const addItem = (item,qty) =>{
        
        console.log({...item,quantity:qty})
        // Pregunto si el objeto que el usuario compró ya está en el carrito con el método isInCart
        // Le paso como argumento el id que está en item
        if(isInCart(item.id)){
            // Si viene por acá en el objeto ya se encuentra un item con ese id. Lo tengo que sumar
            // Para sumarlo uso el modificador de cart setCart y uso el método map
            setCart(
                cart.map((prod)=> {
                    if (prod.id ===item.id){
                        return {...prod, quantity:prod.quantity +qty}
                    }else{
                        // retorno sin modificar
                        return prod
                    }
                }
                )
            )

        }else{
            // Caso que agregue a un elemento que no está en el carrito
            // Para que se mantenga como un array , le agrego las cosas a cart con el spread operator
            // setCart es el método para modificar al carrito (array). 
            // A lo que tenía en cart le modifico la cantidad
            setCart([...cart,{...item,quantity:qty}])
        }

    }

    // Función Borrar todo el carrito
    const clear = () =>{
        // Al array cart, con el metodo setCart lo vacío
        setCart([])
    }

    // Función Está en el carrito. Devuelve True si está en el carrito y False si no está
    const isInCart = (id) =>{
        // El método some devuelve booleano. Recorre toda la colección y busca si encuentra el id
        return cart.some((prod)=> prod.id === id)

    }

    // Función Eliminar un item específico
    // Precisa para funcionar recibir como argumento un id
    const removeItem = (id) =>{
        // La función filter crea una nueva lista excluyendo el elemento que querés borrar.
        // Recorré todo el carrito y dejá pasar solo a los productos cuyo ID sea distinto al del argumento
        // Si el ID coincide, la condición prod.id !== id da false y ese producto queda fuera de la nueva lista.
        // setCart guarda esa nueva lista (ya sin el producto borrado) en el estado de tu aplicación.
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    // Acá devuelve la etiqueta donde react se entera que es un proveedor con el método .provider

    const itemQuantity = (id)=>{
    const inCart = cart.find((prod)=> prod.id === id )
    if(inCart){
        return inCart.quantity
    }else{
        return 0
    }
    }

    // Clase 7
    // Método de cantidad total de items
    // Este método me permite calcular cuantos items hay en el carrito
    const cartQuantity = ()=> {
        // Uso el método reduce que permite recorrer un array completo y transformarlo en un único valor 
        // Optimiza el proceso porque lo hace en una sola línea
        // acc es el contador. Cuenta a medida que se recorre el ciclo. Arranca en cero, se define luego de la suma
        // prod es el elemento del ciclo que se recorre
        // Lo llevo a CartWidget
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
        }

    // Método de total a pagar
    // Uso reduce de igual forma que en cartQuantity
    // Lo llevo a CartView con el use context
    const total = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
    }
    
    
    return(
        // Se recibe una prop que se llama value. 
        
        // Value pasa los datos a todos los componentes hijos. 
        // Value permite a los componentes que lean y modifiquen el carrito 
        
        // Cuando el contexto tiene muchas cosas lo colocamos como objeto. 
        // Ahí le puedo hacer destructuring y le saco los datos más fácil

        
        <CartContext.Provider value={{cart,addItem,clear,removeItem,itemQuantity,cartQuantity,total}}>
            {/* adentro del provider va los que tienen permiso, lo que el provider envuelva */}
            {/* lo hago dinámico con children, todo lo que el provider envuelva lo agarra children */}

            {/* Children representa a los componentes dentro del provider hacia el contexto. 
            Envuelve toda la app */}
             {children}
        </CartContext.Provider>
    )
}