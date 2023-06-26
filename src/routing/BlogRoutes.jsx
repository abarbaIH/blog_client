import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import Articles from "../components/pages/Articles";

export const BlogRoutes = () => {
    return (
        <BrowserRouter>

            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                </Routes>

            </section>
        </BrowserRouter>
    )
}