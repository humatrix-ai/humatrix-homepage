// src/components/footer.js
import React from "react"
import "../styles/all.css"
import "../styles/footer.css"
import { Script } from "gatsby"

export default function Footer() {
    return (
        <footer className="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-info">
                        <h3>ヒューマトリックス株式会社</h3>
                        <p>〒113-0033</p>
                        <p>東京都文京区本郷６丁目２５番１４号宗文館ビル 3F</p>
                        <p>TEL: 070-3362-9876</p>
                    </div>
                    <div class="footer-links">
                        <ul>
                            <li><a href="#services">事業内容</a></li>
                            <li><a href="#company">会社情報</a></li>
                            <li><a href="#achievements">事例</a></li>
                            <li><a href="#news">お知らせ</a></li>
                            <li><a href="mailto:kentohonda@humatrix.jp" class="mailtoui">お問い合わせ</a></li>
                            <Script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js" data-options='{ "title": "新しいメールを", "buttonText1": "Gmailで作成する", "buttonText2": "Outlookで作成する", "buttonText3": "Yahoo!メールで作成する", "buttonText4": "デフォルトのメールアプリから作成する", "buttonTextCopy": "コピー" }'/>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2024 ヒューマトリックス株式会社 All Rights Reserved.</p>
            </div>
        </footer>
    )
}