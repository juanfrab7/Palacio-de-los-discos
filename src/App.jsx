
import './App.css'
import ButtonComponent from './Components/ButtonComponent'
// Importo el ejemplo de la clase 2
import BotonMultiuso2 from './examples/BotonMultiuso2'
// Import de componentes de la clase 2: NavBar e ItemCount
import NavBar from './Components/NavBar'
import ItemCount from "./Components/ItemCount"

import ItemListContainer from './Components/ItemListContainer'

import FetchCountry from './examples/fetchCountry'
import FetchApi from './examples/FetchApi'

function App() {

  // Las funciones para pasar como props no se definen en la etiqueta, porque es una mala practica
  // Defino una función por fuera

  // Funciones ejemplo clase 2

  // const saludar =()=> {
  //   alert("Holis")
  // }

  // const despedir =() => {
  //   alert("ciao")
  // }
  console.log("app")

  return (
    // Etiqueta fragment
    <>
      { /*Coloco la etiqueta del componente */}
      {/* Ejemplo clase 2 */}
      {/* App (el elemento padre) le pasa un prop a BotonMultiuso2 (hijo) que se llama texto2  */}
      {/* Los datos que agrego como props que no son strings, o sea función, booleano, objeto van con llaves */}
      {/* También le paso por props entre llaves las funciones saludar y despedir */}
      {/* <BotonMultiuso2 texto2="-" color="red" onClickFunction={saludar} />
      <BotonMultiuso2 texto2="+" color="green" onClickFunction={despedir} /> */}
      
      {/* Componente clase 2 */}
      <NavBar/>
      <ItemListContainer mensaje = "Bienvenidos a Retrowave Records" />
      <ItemCount/>



      <FetchApi/>
      


      {/* <FetchCountry/> */}





      {/* <h1>Botonga</h1>
      {/* App le pasa un prop a BotonMultiuso que se llama texto  */}
      {/* <BotonMultiuso texto="Hola" color="red" onClickFunction={saludar} />
      <BotonMultiuso texto="Chau" color="green" onClickFunction={despedir}/> */} 

    </>
  )
}

export default App
