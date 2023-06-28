import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home-page">
            <h1>Bienvenido al Blog de REact</h1>
            <p>Blog desarrollado en MERN Stack (Mongo, Express, React, NodeJS)</p>
            <Link to="/articles" className="button">Ver mis artículos</Link>

        </div>
    )
}

export default Home