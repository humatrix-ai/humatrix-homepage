// src/components/header.js
import React from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/logo.png"
import "../styles/all.css"
import "../styles/header.css"

export default function Header() {
    return (
        <header>
            <div class="container">
                <nav>
                    <div class="logo">
                        <Link to="/">
                            <img src={LOGO_IMG} className="logo-image" alt="logo"></img>
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="/#services">事業内容</Link></li>
                        <li><Link to="/aboutus">会社情報</Link></li>
                        <li><Link to="/#achievements">事例</Link></li>
                        <li><Link to="/#news">お知らせ</Link></li>
                        <li><Link to="/contact_page">お問い合わせ</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}