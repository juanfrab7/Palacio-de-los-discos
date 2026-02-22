// Componente clase 3

// Nos sirve para simular los datos de una api

// Voy a crear un array que voy a usar en una promesa
const productos = [
    {
        id: "01",
        nombreBanda: "ACDC",
        nombreDisco: "Highway to hell",
        description: "Hard rock",
        stock: 20,
        price: 25000,
        // La categoría me indica en que parte de la página va a aparecer
        category: "oldies",
        // Todos los productos tienen que tener una imagen
        img:"../acdc-highway-to-hell.jpg"
    },
        {
        id: "02",
        nombreBanda: "ACDC",
        nombreDisco: "Fly on the wall",
        description: "Hard rock",
        stock: 20,
        price: 25000,
        category: "oldies",
        img: "../acdc-fly-on-the-wall.jpg"
    },
        {
        id: "03",
        nombreBanda: "ACDC",
        nombreDisco: "High Voltage",
        description: "Hard rock",
        stock: 50,
        price: 30000,
        category: "oldies",
        img:"../acdc-high-voltage.jpg"
    },
        {
        id: "04",
        nombreBanda: "Creedence Clearwater Revival",
        nombreDisco: "Cosmo's Factory",
        description: "Rock",
        stock: 70,
        price: 10000,
        category: "ofertas",
        img:"../creedence-cosmos-factory.jpg"
    },
        {
        id: "05",
        nombreBanda: "Usted Señalemelo",
        nombreDisco: "Terminos & condiciones",
        description: "Rock",
        stock: 250,
        price: 40000,
        category: "nuevos",
        img:"../usted-senalemelo-terminos-&-condiciones.jpg"
    },
        {
        id: "06",
        nombreBanda: "Creedence Clearwater Revival",
        nombreDisco: "Green River",
        description: "Rock",
        stock: 100,
        price: 10000,
        category: "ofertas",
        img:"../creedence-green-river.jpg"
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

// Función exportada de clase 3 para ItemListContainer
// esta función retorna un array

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

            
        }, 1500);
    })
}

// Función clase 4
//ACÁ VA getItem. La función lleva como argumento id
// Esta función retorna un item del array 

export const getItem = (id) =>{

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            if (error){
                reject("Hubo un error, intente más tardes")
            }else{
                // Creo una variable prod donde guardo
                // Hago el método find que recorre el objeto productos
                // Devuelve el primer elemento que cumpla la condición prod.id === id (argumento de la función)

                let prod = productos.find((prod)=> prod.id ===id)
                // Uso el resolve dinámico y le pongo lo que encontró en la variable prod
                resolve(prod)

            }          
        
        }, 1000);

    })

}