// src/components/hero.js
import React from "react"
import "../styles/all.css"
import "../styles/hero.css"
import { Script } from "gatsby"

export default function Hero() {
    return (
        <div className="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1>人とAIを繋ぎ合わせ、<br/>新たな可能性の母体となる。</h1>
                        <p>最先端のAI・生成AI技術を活用し、各社の課題に合わせて、導入から開発まで包括的なサポートを提供します。<br/>業務効率化・AI新規事業の創出のみならず、幅広い要件で支援致します。</p>
                        <a href="mailto:kentohonda@humatrix.jp" class="mailtoui btn">お問い合わせ</a>
                        <Script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js" data-options='{ "title": "新しいメールを", "buttonText1": "Gmailで作成する", "buttonText2": "Outlookで作成する", "buttonText3": "Yahoo!メールで作成する", "buttonText4": "デフォルトのメールアプリから作成する", "buttonTextCopy": "コピー" }'/>
                    </div>
                </div>  
        </div>
    )
}