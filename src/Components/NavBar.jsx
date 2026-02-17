//importo css de la carpeta assets
import '../assets/css/NavBar.css'

//imagenes --> Las tengo que importar
//De la carpeta src
import logoRetrowave from '../assets/retrowave-records.jpg'
// Importo en este componente el componente CartWidget. Cuando renderice NavBar, renderiza CartWidget
import CartWidget from './CartWidget'

// Componente clase 2 - Barra de navegación Navbar

const NavBar = () => {
    console.log('navbar')

    // Devuelve una etiqueta nav
    return (
        // para los estilos de css usamos className. No usamos class, usamos className.
        // Estos van a ser los enlaces de navegación
        <nav className='nav-container'>
            {/* Coloco los elementos del NavBar */}
            {/*Nombre del ecommerce */}
            <a className='anchor-nav' href="">
                {/* IMAGEN SOURCE con la propiedad src */}
                {/* <img src={logoRetrowave} alt='logo retrowave' className='anchor-nav' />  */}


                {/* IMAGEN PUBLIC */}
                {/* Para logos y favicon se recomienda el uso de public */}
                <img src={'../retrowave-records.jpg'} alt='logo retrowave' className='anchor-nav'/> 
            </a>
            {/*Categorías*/}
            <a className='anchor-nav' href="">Nuevos</a>
            <a className='anchor-nav' href="">Ofertas</a>
            <a className='anchor-nav' href="">Mas Vendidos</a>
            {/* acá llamo a CartWidget */}
            <CartWidget/>
        </nav>
    )
}

// Lo exporto para poder utilizarlo en app.jsx
export default NavBar