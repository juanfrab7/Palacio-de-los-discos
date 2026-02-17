// Ejemplo clase 2

// Para la declaración del componente, tiene que ser siempre en mayuscula. 
// React diferencia así una función común de un componente por la mayúscula
// Declaro el componente con una función flecha
// Los componentes siempre retornan algo. Retorna JSX 
// Una vez que creo el componente lo tengo que exportar con un export default. 
// Y luego lo tengo que importar en app.jsx

// Yo le paso por props información a este componente en app, y el componente usa la prop para cambiar.
// En este caso app le pasa una prop (props) al componente BotonMultiuso2.
// A botón multiuso le tengo que avisar que recibe props. Le paso en el argumento de la función flecha props
// Las props viajan en un formato objeto

// No se usan addeventlistener, los escuchadores se acumulan
// Los eventos onClick, onChange van con camelcase

const BotonMultiuso2 = (props) => {

    console.log("props")
    console.log(props)
    
    return(
        // Devuelvo un botón
        // Le puedo agregar estilos en línea style al botón entre <>
        // Los eventos se declaran en la etiqueta del componente. En este caso es onClick (camelcase)
        // Llamo a la función que paso por props
         
        <button style={{backgroundColor:props.color,padding:"20px 30px" ,border:"none",cursor:"pointer"}}
        onClick={props.onClickFunction}
        >
        {/* En el texto del button le paso props.texto2. 
        En el componente en app (padre) declare texto2 = "hola" y  texto2="Chau" */}
        {props.texto2}</button>

    )
}

// El componente lo tengo que exportar.
// y para que lo vea lo tengo que importar en app.jsx
export default BotonMultiuso2