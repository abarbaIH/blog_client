import React from "react"
import { useEffect, useState } from "react"
import Global from "../../helpers/Global"
import AjaxReq from "../../helpers/AjaxReq"
import ArticleList from "./ArticleList"
import { useParams } from "react-router-dom"

const ArticleDetails = () => {

    const [selectedArticle, setSelectedArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        loadArticle()
    }, [])

    const loadArticle = async () => {

        const { dataRequest, loading } = await AjaxReq(`${Global.url}articles/getArticleDetails/${params.article_id}`, "GET")

        setSelectedArticle(dataRequest)
        setLoading(false)

    }
    return (
        <div className="home-page">

            {
                loading ? <p>cargando</p> :
                    <>
                        <div className="mask">
                            <img src={selectedArticle.articleImg} alt={selectedArticle.title} />
                        </div>
                        <h1>{selectedArticle.title}</h1>
                        <span>{selectedArticle.date}</span>
                        <p>{selectedArticle.description}</p>
                    </>
            }

        </div>


    )
}

export default ArticleDetails