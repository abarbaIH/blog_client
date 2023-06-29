import React, { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const SideBar = () => {

    const [search, setSearch] = useState("")
    const navigation = useNavigate()


    const searching = (e) => {
        e.preventDefault()
        const mySearch = e.target.search_field.value
        navigation(`/search/${mySearch}`, { replace: true })
    }

    return (
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form onSubmit={searching}>
                    <input type="text" name="search_field" />
                    <input type="submit" id="search" value="Buscar" />
                </form>
            </div>

            {/* <div className="add">
                <h3 className="title">Añadir artículo</h3>
                <form>
                    <input type="text" id="title" placeholder="Titulo" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div> */}
        </aside>

    )
}

export default SideBar