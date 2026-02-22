
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './Components/ButtonComponent'
// Importo el ejemplo de la clase 2
import BotonMultiuso2 from './examples/BotonMultiuso2'
// Import de componentes de la clase 2: NavBar e ItemCount
import NavBar from './Components/NavBar'
import ItemCount from "./Components/ItemCount"
// Import de componentes de la clase 3:
import ItemListContainer from './Components/ItemListContainer'

// Import de componentes de la clase 4:
import FetchCountry from './examples/fetchCountry'
import FetchApi from './examples/FetchApi'
import ItemDetailContainer from './Components/ItemDetailContainer';

// Import de librería y componentes de la clase 5: React Router dom
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Error from "./Components/Error"


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


    // Envuelvo la aplicación con el contenedor BrowserRouter que habilita la navegación en la app web
    // sin que renderice
    <BrowserRouter>

      
      {/* Ejemplo clase 2 */}
      {/* App (el elemento padre) le pasa un prop a BotonMultiuso2 (hijo) que se llama texto2  */}
      {/* Los datos que agrego como props que no son strings, o sea función, booleano, objeto van con llaves */}
      {/* También le paso por props entre llaves las funciones saludar y despedir */}
      { /*Coloco la etiqueta del componente */}
      {/* <BotonMultiuso2 texto2="-" color="red" onClickFunction={saludar} />
      <BotonMultiuso2 texto2="+" color="green" onClickFunction={despedir} /> */}
      
      {/* Componente clase 2 */}
      {/* El navbar siempre tiene que estar visible, por eso lo coloco por fuera de routes */}
      <NavBar/>



      {/* El padre app le manda una prop al componente hijo ItemListContainer  */}
      {/* <ItemListContainer mensaje = "Bienvenidos a Retrowave Records" /> */}
      
      {/* Componente clase 3 */}
      {/* <ItemCount/> */}

      {/* Componente clase 4 */}
      {/* <FetchApi/> */}
      {/* <FetchCountry/> */}
      {/* <ItemDetailContainer/> */}

      {/* <h1>Botonga</h1>
      {/* App le pasa un prop a BotonMultiuso que se llama texto  */}
      {/* <BotonMultiuso texto="Hola" color="red" onClickFunction={saludar} />
      <BotonMultiuso texto="Chau" color="green" onClickFunction={despedir}/> */} 

      {/* Componente clase 5 */}
      {/* Routes es el agrupador de las rutas */}
      <Routes>
        {/* Route declara cada ruta */}
        {/* Cuando pongo la barra sola "/" es para mencionar el index */}
        <Route path='/' element={<ItemListContainer mensaje = "Bienvenidos a Retrowave Records" />}/>
        {/* Acá filtro por categoría con category y type. Ese filtro lo uso en ItemListContainer con Params */}
        <Route path='/category/:type' element={<ItemListContainer mensaje = "Bienvenidos a Retrowave Records" />}/>
        {/* Esta ruta enlaza con item y con una ruta con id dinamico usando :id */}
        {/* Para las categorías tengo que reutilizar ItemListContainer */}

        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        {/* Este es el enlace para cuando se ingresa una url con error. Para ello me valgo del * asterisco */}
        <Route path="*" element={<Error/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
