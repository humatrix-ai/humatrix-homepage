// src/components/layout.js
import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/all.css"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout