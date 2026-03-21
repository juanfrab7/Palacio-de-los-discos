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

import Itemlist from "./ItemList"
// Componente de clase 5
import { useParams } from "react-router-dom"
// Componente ejemplo de la clase 5
import Input from "../examples/Input"
// Componente de la clase 6
import Loader from "./Loader"

// Componente de la clase 7
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import { getProducts, productos } from "../mock/asyncMock"


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

    // Agregado clase 6
    // Para el Loader
    const [loading,setLoading] = useState(false)

    // Agregado clase 5 
    // Uso el hook useParams para leer las rutas dinámicas. En este caso el path /:type
    // El use param lee el dato que cambia en la url (/:type)
    // Hago el destructuring
    const {type} = useParams()

    // FIREBASE
    useEffect(()=>{

        setLoading(true)
  
        

        // Nos conectamos a nuestra coleccion. Filtro por categoría

        const prodColl= type ? query(collection(db, "discos"),where("category", "==", type)) :collection(db, "discos")
        // Traigo todos los documentos. 
        getDocs(prodColl)
        // getDocs Nos devuelve una promesa por lo que hago then
        .then((res)=>{
            // Desmenuzo los datos que me vienen en res que es un array
            // Mapea/recorre cada documento
           const list = res.docs.map((doc)=>{
            return {
                // Devuelve el id
                // y el resto lo agrego con un spread
                // Con data accedo y extraigo los valores del documento
                id:doc.id,
                ...doc.data()
            }
           })
           // a la variable data la cargo con lo obtenido en list luego del mapeo
           console.log(list)
           setData(list)
        })
        .catch((error)=> console.log(error,"error"))
        // Si cae en el catch o en el then tengo que apagar el Loader
        .finally(()=>setLoading(false))
    },[type])

    // PROMESA

    // useEffect(()=>{

    //     setLoading(true)
    //     // Llamo a la función importada de asynmock getProducts()
    //     // Pedimos datos del objeto
    //     getProducts()
    //     // Tratamos la respuesta. A la respuesta la veo por consola.
    //     // Este es el caso que la respuesta sea satisfactoria imprimo en consola
    //     // .then((res)=> console.log(res,"respuesta OK"))
    //     // En el caso de que quiera guardar la respuesta en un estado
    //     // Data pasa a guardarse en un estado que arranca con un array vacío
    //     .then((res)=> {
    //         if (type){
    //             setData(res.filter((prod)=> prod.category === type))

    //         }else{
    //             setData(res)
    //         }
    //     })
    //     // Atrapamos el error. Si sale mal imprimo el error por consola
    //     // Queda a la escucha de type
    //     .catch((error)=> console.log(error,"error"))
    //     // Si cae en el catch o en el then tengo que apagar el Loader
    //     .finally(()=>setLoading(false))
    // },[type])
   
    // Función para subir masivamente la colección del mock a firebase
    // const subirDataAFirebase = () => {
    //     console.log('SUBIENDO DATA...')
    //     const prodCollec = collection(db, 'discos')
    //     productos.map((prod) => addDoc(prodCollec, prod))
    // }

    return(
        // Hago un render condicional. Loading por defecto es False
        // Si es verdadero mientras se cumple la promesa se muestra el spinner
        // Cuando termina muestra la categoría
        <>
        
        {
            loading 
            // Paso una prop, si type existe lo asocia a la categoría, sino todos los discos
            ? <Loader text={type ? `Cargando categoría ${type}` : 'Cargando todos el catalogo 💿'}/>
            :
        // Este es el render, es el html que devuelve el componente
            <div>
            {/* Con este botón subo masivamente los objetos de mi coleccion */}
            {/* <button onClick={subirDataAFirebase}>SUBIR DATA</button> */}
            
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
        }
        </>
    )
}


export default ItemListContainer