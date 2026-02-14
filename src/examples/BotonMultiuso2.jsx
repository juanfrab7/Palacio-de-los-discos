// Para la declaración del componente, tiene que ser siempre en mayuscula. React diferencia así una función común de un componente
// Declaro el componente con una función flecha
// Los componentes siempre retornan algo. Retorna JSX 

// Yo le paso por props información a este componente, y el componente usa la prop para cambiar.
// En este caso app le pasa una prop al componente BotonMultiuso2.
// A botón multiuso le tengo que avisar que recibe props. Le paso en el argumento de la función flecha props
// Las props viajan en un formato objeto
// No se usan addeventlistener, los escuchadores se acumulan
// Los eventos onClick, onChange van con camelcase

const BotonMultiuso2 = (props) => {

   
    
    return(
        // Devuelvo un botón
        // Le puedo agregar estilos en línea al botón
        <button style={{backgroundColor:props.color,padding:"20 px 30px" ,border:"none",cursor:"pointer"}}
        onClick={props.onClickFunction}
        >{props.texto2}</button>

    )
}

// El componente lo tengo que exportar.
// y para que lo vea lo tengo que importar en app.jsx
export default BotonMultiuso2