import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'


function Navbar () {
    return (
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
             <a className="navbar-item" href="App.jsx">
                GAMERLAND
            </a>
            </Link>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link to="/chairs">
                <a className="navbar-item navbar-item-li">
                Chairs
                </a>
                </Link>
                <Link to="/keyboards">
            <a className="navbar-item navbar-item-li">
                Keyboards
            </a>
            </Link>
            <Link to="/Desktops">
            <a className="navbar-item navbar-item-li">
            Desktops
            </a>
            </Link>
            <Link to="/Accesories">
            <a className="navbar-item navbar-item-li" >
                Accesories
            </a>
            </Link>
                </div>
                <CartWidget />
            </div>
            
        </nav>
        </>
    )
}

export default Navbar;