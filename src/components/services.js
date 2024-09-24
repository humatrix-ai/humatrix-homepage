// src/components/hero.js
import React from "react"
import "../styles/services.css"
import img from "../../static/dx.webp"
import img2 from "../../static/system-develop.webp"
import img3 from "../../static/consulting.webp"


export default function Services() {
    return (
        <div className="services">
            <section id="services">
                <div class="container">
                    <h2>事業内容</h2>
                    <div class="services-grid">
                        <div class="service-item">
                            <img src={img3} alt="UnsplashのJason Goodmanが撮影した写真"></img>
                            <div class="service-item-content">
                                <h3>AI導入・活用コンサルティング</h3>
                                <p>課題の特定からAI導入まで、オーダーメイドかつ、ワンストップで提供いたします。
                                    <br/>テーブルデータ・画像・自然言語など、さまざまなデータ形式に対応いたします。
                                    <br/>特に、ビッグデータを扱ったデータ処理・分析と生成AIモデルの精度向上を強みとしております。</p>
                            </div>
                        </div>
                        <div class="service-item">
                            <img src={img2} alt="UnsplashのFlorian Olivoが撮影した写真"></img>
                            <div class="service-item-content">
                                <h3>AIシステム開発</h3>
                                <p>Humatrixに在籍する高度な専門家が、お客様の課題ベースで、<br/>要件定義からPoC、本導入までワンストップで実施いたします。</p>
                            </div>
                        </div>
                        <div class="service-item">
                            <img src={img} alt="Unsplashのcampaign_creatorsが撮影した写真"></img>
                            <div class="service-item-content">
                                <h3>DX研修</h3>
                                <p>Humatrixに在籍する高度な専門家がオーダーメイドの研修を提供し、社内チームの体制強化を支援致します。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}