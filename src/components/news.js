// src/components/hero.js
import React from "react"
import "../styles/all.css"
import "../styles/news.css"

export default function News() {
    return (
        <div className="news">
            <section id="news">
                <div class="container">
                    <h2>お知らせ</h2>
                    <div class="news-grid">
                        <div class="news-item">
                            <div class="news-item-content">
                                <h3>センチュリー・システムズ株式会社様とのPoC実施開始</h3>
                                <p>2024年7月より通信機器メーカーのセンチュリー・システムズ株式会社様とのPoCを開始致しました。<br/>
                                本PoCは製品に関する技術的な問い合わせへの対応を目的としたAIチャットボットの有効性を確認することを目的としております。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}