//import css
import '../assets/css/NavBar.css'
//imagenes
//SRC
import logoReact from '../assets/react.svg'
import CartWidget from './CartWidget'

const NavBar = () => {
    console.log('navbar')
    return (
        <nav className='nav-container'>
            <a className='anchor-nav' href="">
                {/* imagen SRC */}
                {/* <img src={logoReact} alt='logo react' /> */}
                {/* IMAGEN PUBLIC */}
                <img src={'../vite.svg'} alt='logo vite'/>
            </a>
            <a className='anchor-nav' href="">Nuevos</a>
            <a className='anchor-nav' href="">Ofertas</a>
            <a className='anchor-nav' href="">Mas Vendidos</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar