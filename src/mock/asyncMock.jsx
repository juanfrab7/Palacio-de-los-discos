// Componente clase 3

// Nos sirve para simular los datos de una api

// Voy a crear un array que voy a usar en una promesa
const productos = [
    {
        id: "01",
        nombreBanda: "ACDC",
        nombreDisco: "aa",
        description: "hard rock",
        stock: 20,
        price: 25000,
        // La categoría me indica en que parte de la página va a aparecer
        category: "oldies",
        // Todos los productos tienen que tener una imagen
        img:""
    },
        {
        id: "02",
        nombreBanda: "ACDC",
        nombreDisco: "aa",
        description: "rock",
        stock: 20,
        price: 25000,
        category: "oldies",
        img: "../public/acdc-greatest-hits.jpg"
    },
        {
        id: "03",
        nombreBanda: "ACDC",
        nombreDisco: "aa",
        description: "rock",
        stock: 20,
        price: 25000,
        category: "oldies",
        img:""
    }
]

// Acá creo la promesa
let error = false;

// Creo una variable getProducts que trae todos los productos  (e-commerce)
// Los productos del ecommerce son los elementos del del array creado arriba
// getProducts es una función flecha sin argumentos
// La exporto porque la voy a usar en otro componente -> ItemListContainer

// Creo y exporto la promesa. El objetivo es simular la asincronía
// Esta función va a retornar una promesa

// Esta es una preparación de código para conectar mi proyecto.
// Se prepara para trabajar con asincronía

export const getProducts = () => {

    // Retorna una nueva promesa que va a tener la función del callback, el resolve y el reject
    
    return new Promise((resolve, reject) => {
        // Creo un delay de tiempo con el settimeout de 3 segundos
        // Para la simulación este es el delay de tiempo
        setTimeout(() => {
            // Acá está el código. Esto lo devuelve en 3 segundos.Respondo si error = true
            if (error){
                // Si error = true -> Rechazo la promesa
                reject("Hubo un error, intente más tarde")
            }else{
                // Resuelvo la promesa y devuelvo con mi array de productos
                resolve(productos)
            }

            
        }, 3000);
    })
}

//ACÁ VA getItem
export const getItem = (id) =>{

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            if (error){
                reject("Hubo un error, intente más tardes")
            }else{

                let prod = productos.find((prod)=> prod.id ===id)
                resolve(prod)
            }
            
        
        }, 1000);


    })

}