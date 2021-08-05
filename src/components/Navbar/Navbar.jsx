import CartWidget from './CartWidget'


function Navbar () {
    return (
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
             <a className="navbar-item" href="App.jsx">
                GAMERLAND
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item navbar-item-li">
                Sillas
                </a>
            <a className="navbar-item navbar-item-li">
                Teclados
            </a>
            <a className="navbar-item navbar-item-li">
                Escritorios
            </a>
            <a className="navbar-item navbar-item-li" >
                Accesorios
            </a>
                </div>
                <CartWidget />
            </div>
            
        </nav>
        </>
    )
}

export default Navbar;