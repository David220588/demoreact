import React from "react";
import { Link } from 'react-router-dom'

export default function Header(){
    
    return (
    <div>
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
                <li><Link to="/Somos">Somos</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
           </ul>
        </header>

    </div>)
}