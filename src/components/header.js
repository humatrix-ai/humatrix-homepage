// src/components/header.js
import React from "react"
import { Link } from "gatsby"
import { Script } from "gatsby"
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
                        <li><a href="mailto:kentohonda@humatrix.jp" class="mailtoui btn">お問い合わせ</a></li>
                        <Script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js" data-options='{ "title": "新しいメールを", "buttonText1": "Gmailで作成する", "buttonText2": "Outlookで作成する", "buttonText3": "Yahoo!メールで作成する", "buttonText4": "デフォルトのメールアプリから作成する", "buttonTextCopy": "コピー" }'/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}