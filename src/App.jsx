
import './App.css'
import ButtonComponent from './Components/ButtonComponent'

import BotonMultiuso from './Components/BotonMultiuso'
// Import de componentes: NavBar
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

function App() {

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
      <ItemListContainer mensaje = "Bienvenidos a Retrowave Records" />

      {/* <h1>Botonga</h1>
      {/* App le pasa un prop a BotonMultiuso que se llama texto  */}
      {/* <BotonMultiuso texto="Hola" color="red" onClickFunction={saludar} />
      <BotonMultiuso texto="Chau" color="green" onClickFunction={despedir}/> */} */}

    </>
  )
}

export default App
