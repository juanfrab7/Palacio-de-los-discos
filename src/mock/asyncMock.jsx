const productos = [
    {
        id: "01",
        nombre: "ACDC",
        description: "hard rock",
        stock: 20,
        price: 25000,
        // La categoría me indica en que parte de la página va a aparecer
        category: "oldies",
        img:""
    },
        {
        id: "02",
        nombre: "ACDC",
        description: "rock",
        stock: 20,
        price: 25000,
        category: "oldies",
        img:""
    }

]

let error = false;

// Creo una variable que trae todos los productos del e-commerce
// Función flecha sin argumentos

// Creo y exporto la promesa. El objetivo es la asincronía

export const getProducts = () => {

    // Retorna una nueva promesa que va a tener la función del callback, el resolve y el reject
    // Creo un delay de tiempo con el settimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error){
                // Rechazo la promesa
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