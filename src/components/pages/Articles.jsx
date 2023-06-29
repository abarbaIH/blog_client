import React from "react"
import { useEffect, useState } from "react"
import Global from "../../helpers/Global"
import AjaxReq from "../../helpers/AjaxReq"
import ArticleList from "./ArticleList"


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
                allArticles.length >= 1 ? <ArticleList allArticles={allArticles} setAllArticles={setAllArticles} /> : <h2>No hay artículos actualmente</h2>
            )}
        </>
    )
}

export default Articles