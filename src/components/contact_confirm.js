// src/components/hero.js
import React from "react"
import "../styles/contact_confirm.css"
import { Link } from "gatsby"

export default function Contact_confirm() {
    return (
        <div className="contact">
            <div class="contact_confirm_container" role="main">
                <h1>お問い合わせありがとうございます</h1>
                <div class="message">
                    <p>お問い合わせを受け付けました。内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
                    <p>通常、2〜3営業日以内にご返答いたしますが、内容によってはお時間をいただく場合がございます。あらかじめご了承ください。</p>
                </div>
                <Link to="/"><a href="" class="back-link">トップページに戻る</a></Link>
            </div>
        </div>
    )
}