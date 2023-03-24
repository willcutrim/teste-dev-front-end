import { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css'
import menu from '../../assets/menu.svg'

type Props = {
    title: string;
}

export function Navbar({title}: Props) {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (

        <nav className="navbar">
            <div className="container">
                <div className="title-nav">
                    <h1>{title}</h1>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img src={menu} alt='menu' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>
                        </li>
                        <li>
                        <Link to='/usuarios' style={{ color: 'inherit', textDecoration: 'inherit'}}>Usuarios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}