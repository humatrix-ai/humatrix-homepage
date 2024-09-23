// src/components/footer.js
import React from "react"
import "../styles/all.css"
import "../styles/footer.css"

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
                            <li><a href="#contact">お問い合わせ</a></li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2024 ヒューマトリックス株式会社 All Rights Reserved.</p>
            </div>
        </footer>
    )
}