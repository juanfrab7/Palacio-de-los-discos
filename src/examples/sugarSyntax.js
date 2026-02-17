// SPREAD OPERATOR
// Lo puedo usar para objetos y para arrays

const numbers =[1,2,3]

// Desparramo (hago una copia de) lo que hay en numbers y le agrego el resto
const sugarNumbers = [...numbers,4,5,6,7,8,9,10]

// DESTRUCTURING
// También se usa en objetos y en arrays

// Destructuring de Arrays

const colours = ["Amarillo","Violeta","Verde"]

// creo tres constantes en una misma línea. El destructuring lee por índice del array  

const [amarillo,violeta,verde] =  colours

// si quiero el ultimo

const[,,verde2] = colours

// Destructiring de objetos
// Se ven mucho en las props

const alumno = {

    nombre: "Roque",
    edad: 33,
    ciudad: "Mexico"
}

// Creo constantes en base al atributo

const {nombre,edad} = alumno

// CONDICIONALES
// Se usa el ternario

const sugarMensaje = edad >= 18 ? "Sos mayor de edad" : "Sos menor de edad";

// CONCATENACIÓN
// Se usa template string

// Usamos comillas invertidas (backtips) `` (alt+96)

console.log(`Hola ${nombre} como te va?`)

// FUNCIONES
// Se usa función flecha (arrow function)

function sumar (a,b){
    return a + b
}

const sumarFlecha = (a,b) =>{
    return a + b
}

// Con sugar puedo obviar el return
const sugarSumarFlecha = (a,b) => a+b


