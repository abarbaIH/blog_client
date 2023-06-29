import React, { useEffect } from "react"
import { useState } from "react"
import useForm from "../../hooks/useForm"
import AjaxReq from "../../helpers/AjaxReq"
import Global from "../../helpers/Global"
import { useNavigate, useParams } from "react-router-dom"


const EditArticleForm = () => {

    const { articleData, createArticle, modifyArticle } = useForm({})
    const [selectedArticle, setSelectedArticle] = useState({})
    const { reqResult, setReqResult } = useState(false)
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const navigation = useNavigate()


    useEffect(() => {
        loadArticle()
    }, [])

    const loadArticle = async () => {

        const { dataRequest, loading } = await AjaxReq(`${Global.url}articles/getArticleDetails/${params.article_id}`, "GET")

        setSelectedArticle(dataRequest)
        setLoading(false)

    }

    const editArticle = async (e) => {
        // Recoger los datos del formulario
        e.preventDefault()
        const newArticle = articleData

        // Guardar los datos en backend
        const { dataRequest, loading } = await
            AjaxReq(`${Global.url}articles/editArticle/${params.article_id}`, "PUT", newArticle)

        navigation("/articles")

    }

    return (

        <div className="home-page">

            <h1>Editar Artículo</h1>
            <p>Formulario para editar: {selectedArticle.title}</p>

            <form className="form" onSubmit={editArticle}>

                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" defaultValue={selectedArticle.title} onChange={modifyArticle} />

                </div>

                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea type="text" name="description" defaultValue={selectedArticle.description} onChange={modifyArticle} />
                </div>

                <div className="form-group">
                    <label htmlFor="articleImg">Imagen</label>
                    <input type="text" name="articleImg" defaultValue={selectedArticle.articleImg} onChange={modifyArticle} />
                </div>

                <input type="submit" value="Guardar" className="btn btn-success" />
            </form>

        </div>
    )
}

export default EditArticleForm

