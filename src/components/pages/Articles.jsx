import React from "react"
import { useEffect, useState } from "react"
import Global from "../../helpers/Global"
import AjaxReq from "../../helpers/AjaxReq"

const Articles = () => {

    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        loadArticles()
    }, [])

    const loadArticles = async () => {

        const { dataRequest, loading } = await AjaxReq(`${Global.url}articles/getArticles`, "GET")


        setAllArticles(dataRequest)
        setLoading(false)

    }
    return (
        <>
            {loading ? "Cargando..." : (

                !allArticles.length === 0 ? <h2>No hay artículos actualmente</h2> :
                    allArticles.map(article => {
                        return (
                            <article key={article._id} className="article-item">
                                <div className="mask">
                                    <img src={article.articleImg} alt={article.title} />
                                </div>

                                <div className="data-article">

                                    <h3 className="title">{article.title}</h3>
                                    <p className="description">{article.description}</p>

                                    <button className="edit">Editar</button>
                                    <button className="delete">Borrar</button>
                                </div>

                            </article>
                        )

                    })
            )}

        </>
    )
}

export default Articles