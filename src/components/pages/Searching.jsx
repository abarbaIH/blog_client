import React, { useEffect, useState } from "react"
import AjaxReq from "../../helpers/AjaxReq"
import Global from "../../helpers/Global"
import ArticleList from "./ArticleList"
import { useParams } from "react-router-dom"


const Searching = () => {
    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        loadArticles()
    }, [])

    useEffect(() => {
        loadArticles()
    }, [params])

    const loadArticles = async () => {

        const { dataRequest, loading } = await AjaxReq(`${Global.url}articles/searchArticle/${params.searching}`, "GET")

        setAllArticles(dataRequest)
        setLoading(false)
    }
    return (
        <>
            {loading ? "Cargando..." : (
                allArticles.length >= 1 ? <ArticleList allArticles={allArticles} setAllArticles={setAllArticles} /> : <h2>No hay artículos actualmente</h2>
            )}
        </>
    )
}

export default Searching