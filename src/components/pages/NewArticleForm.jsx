import React from "react"
import { useState } from "react"
import useForm from "../../hooks/useForm"
import AjaxReq from "../../helpers/AjaxReq"
import Global from "../../helpers/Global"


const NewArticleForm = () => {

    const { articleData, createArticle, modifyArticle } = useForm({})
    const { reqResult, setReqResult } = useState(false)

    const saveArticle = async (e) => {
        // Recoger los datos del formulario
        e.preventDefault()
        const newArticle = articleData

        // Guardar los datos en backend
        const { dataRequest, loading } = await
            AjaxReq(`${Global.url}articles/newArticle`, "POST", newArticle)

    }


    return (

        <div className="home-page">

            <h1>Crear Artículo</h1>
            <p>Formulario para crear un nuevo artículo</p>

            <form className="form" onSubmit={saveArticle}>

                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" placeholder="introduce el título" onChange={modifyArticle} />

                </div>

                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea type="text" name="description" placeholder="introduce la descripción" onChange={modifyArticle} />
                </div>

                <div className="form-group">
                    <label htmlFor="articleImg">Imagen</label>
                    <input type="text" name="articleImg" placeholder="introduce imagen" onChange={modifyArticle} />
                </div>

                <input type="submit" value="Enviar" className="btn btn-success" />
            </form>

        </div>
    )
}

export default NewArticleForm

