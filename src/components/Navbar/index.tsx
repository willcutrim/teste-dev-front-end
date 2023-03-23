import { useState } from 'react';
import './styles.css'
import menu from '../../assets/menu.svg'

export function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (

        <nav className="navbar">
            <div className="container">
                <div className="title-nav">
                    <h1>News</h1>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img src={menu} alt='menu' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Usuarios
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}