import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/articles">Artículos</NavLink></li>
                <li><NavLink to="/save-article">Crear Artículo</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation