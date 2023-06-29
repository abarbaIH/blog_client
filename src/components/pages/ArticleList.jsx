import React from "react";
import Global from "../../helpers/Global";
import AjaxReq from "../../helpers/AjaxReq";
import { Link } from "react-router-dom";

const ArticleList = ({ allArticles, setAllArticles }) => {

    const deleteArticle = async (id) => {
        const { dataRequest } = await
            AjaxReq(`${Global.url}articles//deleteArticle/${id}`, "DELETE")
        const updatedArticles = allArticles.filter(article => article._id !== id)
        setAllArticles(updatedArticles)

    }

    return (
        allArticles?.map(article => {
            return (

                <article key={article._id} className="article-item">
                    <div className="mask">
                        <img src={article.articleImg} alt={article.title} />
                    </div>

                    <div className="data-article">

                        <h3 className="title"> <Link to={`/article/${article._id}`} > {article.title}</Link></h3>
                        <p className="description">{article.description}</p>
                        <Link to={`/edit/${article._id}`}><button className="edit">Editar</button></Link>

                        <button className="delete" onClick={() => {
                            deleteArticle(article._id)
                        }}>Borrar</button>
                    </div>

                </article>
            )

        })
    )
}

export default ArticleList