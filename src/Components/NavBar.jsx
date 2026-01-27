//importo css de la carpeta assets
import '../assets/css/NavBar.css'
//imagenes
//SRC
import logoRetrowave from '../assets/retrowave-records.jpg'
import CartWidget from './CartWidget'

const NavBar = () => {
    console.log('navbar')
    // Devuelve una etiqueta nav
    return (
        // para los estilos usamos className. No usamos class
        // Estos van a ser los enlaces de navegación
        <nav className='nav-container'>
            {/* Coloco los elementos del NavBar */}
            <a className='anchor-nav' href="">
                {/* imagen SRC */}
                <img src={logoRetrowave} alt='logo retrowave' className='anchor-nav' /> 
                {/* IMAGEN PUBLIC */}
                {/* <img src={'../vite.svg'} alt='logo vite'/> */}
            </a>
            <a className='anchor-nav' href="">Nuevos</a>
            <a className='anchor-nav' href="">Ofertas</a>
            <a className='anchor-nav' href="">Mas Vendidos</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar