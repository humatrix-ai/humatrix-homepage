// src/components/hero.js
import React from "react"
import "../styles/all.css"
import "../styles/contact.css"
import { Script } from "gatsby"

export default function Recruitment() {
    return (
        <div className="contact">
            <section id="contact" class="contact">
                <div class="container">
                    <h2>お問い合わせ</h2>
                    <p>AI・生成AI活用に関する課題をお持ちの場合は、<br/>お気軽にお問い合わせください。</p>
                    <a href="mailto:kentohonda@humatrix.jp" class="mailtoui btn">お問い合わせ</a>
                    <Script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js" data-options='{ "title": "新しいメールを", "buttonText1": "Gmailで作成する", "buttonText2": "Outlookで作成する", "buttonText3": "Yahoo!メールで作成する", "buttonText4": "デフォルトのメールアプリから作成する", "buttonTextCopy": "コピー" }'/>
                </div>
            </section>
        </div>
    )
}