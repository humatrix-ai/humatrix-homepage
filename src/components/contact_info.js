// src/components/hero.js
import React from "react"
import { Link } from "gatsby"
import "../styles/contact_info.css"

export default function Contact_info() {
    return (
        <div className="contact_info">
            <main class="contact-container">
                <section class="form-section">
                    <h1>お問い合わせ</h1>
                    <p class="description">
                        サービスに関するお問い合わせやご相談は、<br/>以下のフォームよりお気軽にご連絡ください。
                    </p>
                    <form method="POST" netlify>
                        <div class="form-group">
                            <label for="company">会社名</label>
                            <input type="text" id="company" name="company"></input>
                        </div>
                        <div class="form-group">
                            <label for="name">お名前 <span class="required">*</span></label>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div class="form-group">
                            <label for="email">メールアドレス <span class="required">*</span></label>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                        <div class="form-group">
                            <label for="phone">電話番号</label>
                            <input type="tel" id="phone" name="phone"></input>
                        </div>
                        <div class="form-group">
                            <label for="inquiry">お問い合わせ内容 <span class="required">*</span></label>
                            <textarea id="inquiry" name="inquiry" required></textarea>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="privacy" name="privacy" required/>
                            <label for="privacy">
                                <Link to="/privacy_page"><a>プライバシーポリシー</a></Link>に同意する
                            </label>
                        </div> 
                        <button type="submit" class="submit-btn">送信する</button>
                    </form>
                </section>
            </main>
        </div>
    )
}
