
import './App.css'
import ButtonComponent from './Components/ButtonComponent'
// Import de componentes
import BotonMultiuso from './Components/BotonMultiuso'


function App() {

  const saludar =()=> {
    alert("Holis")
  }

  const despedir =() => {
    alert("ciao")
  }

  return (
    <>
      <h1>Botonga</h1>
      {/* App le pasa un prop a BotonMultiuso que se llama texto  */}
      <BotonMultiuso texto="Hola" color="red" onClickFunction={saludar} />
      <BotonMultiuso texto="Chau" color="green" onClickFunction={despedir}/>

    </>
  )
}

export default App
