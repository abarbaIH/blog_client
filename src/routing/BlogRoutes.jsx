import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import Articles from "../components/pages/Articles";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import SideBar from "../components/layout/SideBar";
import NewArticleForm from "../components/pages/NewArticleForm";
import Searching from "../components/pages/Searching";
import ArticleDetails from "../components/pages/ArticleDetails";
import EditArticleForm from "../components/pages/EditArticleForm";


export const BlogRoutes = () => {
    return (

        <BrowserRouter>

            <Header />
            <Navigation />

            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/article/:article_id" element={<ArticleDetails />} />
                    <Route path="/save-article" element={<NewArticleForm />} />
                    <Route path="/search/:searching" element={<Searching />} />
                    <Route path="/edit/:article_id" element={<EditArticleForm />} />
                    <Route path="/contact" element={<Home />} />
                    <Route path="*" element={
                        <div className="home-page">
                            <h1>Error 404. The Page doesn´t exist</h1>
                        </div>
                    } />


                </Routes>

            </section>

            <SideBar />

            <Footer />

        </BrowserRouter>
    )
}
