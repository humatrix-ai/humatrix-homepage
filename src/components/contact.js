// src/components/hero.js
import React from "react"
import "../styles/all.css"
import "../styles/contact.css"
import { Link } from "gatsby"

export default function Recruitment() {
    return (
        <div className="contact">
            <section id="contact" class="contact">
                <div class="container">
                    <h2>お問い合わせ</h2>
                    <p>AI・生成AI活用に関する課題をお持ちの場合は、<br />お気軽にお問い合わせください。</p>
                    <Link to="/contact_page"><a href="" class="btn">お問い合わせ</a></Link>
                </div>
            </section>
        </div>
    )
}