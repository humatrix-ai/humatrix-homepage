// src/components/hero.js
import React from "react"
import "../styles/all.css"
import "../styles/company.css"
import img from "../../static/kentohonda.webp"

export default function Company() {
    return (
        <div className="company">
            <h1>会社情報</h1>
        
            <section class="company-info">
                <h2>代表紹介</h2>
                <div class="message">
                    <div class="message-image">
                        <img src={img} alt="代表取締役社長の写真"></img>
                    </div>
                    <div class="message-text">
                        <h3 class="address">
                        代表取締役
                        </h3>
                        <h3 class="ceo-name">
                            本田 健人
                        </h3>
                        <br/>
                        <h3 class="address">
                        経歴
                        </h3>
                        <p>
                            - 筑波大学情報学群知識情報・図書館学類に在籍中。<br/>
                            - 東京大学寄附講座「GCI 2023 Winter」を修了した後、ヒューマトリックス株式会社を共同創業。<br/>
                            - 大手リスキリングサイトにおける、生成AIをテーマとした教材の構成案作成・コンテンツ作成を担当した経験を有する。<br/>
                            - 「ゼロから始める,生成AI×起業」ビジネスコンテストに出場し、最優秀賞を受賞。<br/>
                        </p>
                        
                    </div>
                </div>
            </section>

            <section class="company-info">
                <h2>会社概要</h2>
                <table>
                    <tr>
                        <th>会社名</th>
                        <td>株式会社HUMATRIX</td>
                    </tr>
                    <tr>
                        <th>設立</th>
                        <td>2024年6月12日</td>
                    </tr>
                    <tr>
                        <th>資本金</th>
                        <td>30万円</td>
                    </tr>
                    <tr>
                        <th>代表者</th>
                        <td>代表取締役 本田 健人</td>
                    </tr>
                    <tr>
                        <th>事業内容</th>
                        <td>
                            ・AIソリューションの開発・提供<br/>
                            ・AI技術を活用したコンサルティング<br/>
                            ・業務効率化支援<br/>
                            ・新規事業開発支援<br/>
                        </td>
                    </tr>
                    <tr>
                        <th>所在地</th>
                        <td>〒113-0033<br/>東京都文京区本郷６丁目２５番１４号 宗文館ビル 3F</td>
                    </tr>
                </table>
            </section>
        </div>
    )
}