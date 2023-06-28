import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import Articles from "../components/pages/Articles";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import SideBar from "../components/layout/SideBar";
import NewArticleForm from "../components/pages/NewArticleForm";


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
                    <Route path="/save-article" element={<NewArticleForm />} />
                    <Route path="/contact" element={<Home />} />

                </Routes>

            </section>

            <SideBar />

            <Footer />

        </BrowserRouter>
    )
}
