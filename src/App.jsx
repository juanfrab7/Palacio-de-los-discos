
import './App.css'
import ButtonComponent from './Components/ButtonComponent'

import BotonMultiuso from './Components/BotonMultiuso'
// Import de componentes: NavBar
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import BotonMultiuso2 from './examples/BotonMultiuso2'
import FetchCountry from './examples/fetchCountry'
import FetchApi from './examples/FetchApi'

function App() {

  // Las funciones para pasar como props no se definen en la etiqueta, porque es una mala practica
  // Defino una función

  const saludar =()=> {
    alert("Holis")
  }

  const despedir =() => {
    alert("ciao")
  }

  return (
    <>
      { /*Coloco la etiqueta del componente */}
      <NavBar/>
      <FetchApi/>
      <ItemListContainer mensaje = "Bienvenidos a Retrowave Records" />

      {/* App le pasa un prop a BotonMultiuso que se llama texto2  */}
      {/* Los datos que agrego como props que no son strings, o sea función, booleano, objeto van con llaves */}
      {/* <FetchCountry/> */}


      <BotonMultiuso2 texto2="Hola" color="red" onClickFunction={saludar} />
      <BotonMultiuso2 texto2="Chau" color="blue" onClickFunction={despedir} />


      {/* <h1>Botonga</h1>
      {/* App le pasa un prop a BotonMultiuso que se llama texto  */}
      {/* <BotonMultiuso texto="Hola" color="red" onClickFunction={saludar} />
      <BotonMultiuso texto="Chau" color="green" onClickFunction={despedir}/> */} 

    </>
  )
}

export default App
