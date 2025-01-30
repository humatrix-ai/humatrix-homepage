// src/components/hero.js
import React from "react"
import "../styles/all.css"
import "../styles/achievements.css"
import Logo_cs from "../../static/century-systems-logo.gif"

export default function Achievements() {
    return (
        <div className="achievements">
            <section id="achievements">
                <div class="container">
                    <h2>支援実績</h2>
                    <div class="achievements-grid">
                        <div class="achievement-item">
                            <img src={Logo_cs} alt="顧客ロゴ1"></img>
                            <div>
                                <h3>センチュリー・システムズ株式会社 様</h3>
                                <p>2024年7月より製品に関する技術的な問い合わせへの対応を目的としたAIチャットボットの実証実験を実施。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}