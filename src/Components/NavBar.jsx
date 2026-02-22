//importo css de la carpeta assets
import '../assets/css/NavBar.css'

//imagenes --> Las tengo que importar
//De la carpeta src
import logoRetrowave from '../assets/retrowave-records.jpg'
// Importo en este componente el componente CartWidget. Cuando renderice NavBar, renderiza CartWidget
import CartWidget from './CartWidget'
// Componente clase 5: Importo navlink para los enlaces del navbar desde react-router-dom
import { NavLink } from 'react-router-dom'


// Componente clase 2 - Barra de navegación Navbar

const NavBar = () => {
    console.log('navbar')

    // Devuelve una etiqueta nav
    return (
        // para los estilos de css usamos className. No usamos class, usamos className.
        // Estos van a ser los enlaces de navegación
        <nav className='nav-container'>
            {/* Coloco los elementos del NavBar */}
            {/* Logo - Nombre del ecommerce */}
            {/* <a className='anchor-nav' href=""></a> */}
            {/* Reemplazo anchor tag por navlink */}
            <NavLink className='anchor-nav' to="/">
                {/* IMAGEN SOURCE con la propiedad src */}
                {/* <img src={logoRetrowave} alt='logo retrowave' className='anchor-nav' />  */}


                {/* IMAGEN PUBLIC */}
                {/* Para Logos y favicon se recomienda el uso de public */}
                <img src={'../retrowave-records.jpg'} alt='logo retrowave' className='anchor-nav'/> 
            </NavLink>
            {/*Categorías*/}

            {/* Reemplazo anchor tag a. La etiqueta anchor (<a>) en HTML crea hipervínculos para navegar a otras páginas
            y secciones internas. Utiliza el atributo href para definir el destino */}
            {/* <a className='anchor-nav' href="">Nuevos</a>
            <a className='anchor-nav' href="">Ofertas</a>
            <a className='anchor-nav' href="">Mas Vendidos</a> */}

            {/* Realizo navegación con NavLink */}
            {/* Es importante que las categorías que tengo en el navbar coincidan con las de mi objeto en asycmock */}
            <NavLink className='anchor-nav' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='anchor-nav' to="/category/oldies">Oldies</NavLink>
            <NavLink className='anchor-nav' to="/category/ofertas">Ofertas</NavLink>
            {/* acá llamo a CartWidget (carrito de compras) */}
            <CartWidget/>
        </nav>
    )
}

// Lo exporto para poder utilizarlo en app.jsx
export default NavBar