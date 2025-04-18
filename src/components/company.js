// src/components/hero.js
import React from "react"
import "../styles/all.css"
import "../styles/company.css"
import img from "../../static/kentohonda.jpg"

export default function Company() {
    return (
        <div className="company">
            <h1>会社情報</h1>

            <section class="company-info">
                <h2>会社概要</h2>
                <table>
                    <tr>
                        <th>会社名</th>
                        <td>ヒューマトリックス株式会社</td>
                    </tr>
                    <tr>
                        <th>設立</th>
                        <td>2024年6月</td>
                    </tr>
                    <tr>
                        <th>主要取引銀行</th>
                        <td>三井住友銀行</td>
                    </tr>
                    <tr>
                        <th>代表者</th>
                        <td>代表取締役 本田 健人</td>
                    </tr>
                    <tr>
                        <th>事業内容</th>
                        <td>
                            ・AIソリューションの開発・提供<br/>
                            ・AI・生成AI導入コンサルティング<br/>
                            ・AI・生成AI研修の実施<br/>
                        </td>
                    </tr>
                    <tr>
                        <th>所在地</th>
                        <td>〒113-0033<br/>東京都文京区本郷６丁目２５番１４号 宗文館ビル 3F</td>
                    </tr>
                </table>
            </section>

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
                            筑波大学大学院 情報学学位プログラムに在籍中(2025/04/08時点)。情報探索・グラフ理論等に関するテーマで研究を実施している。<br/>
                            生成AIを主題としたビジネスコンテストにて、最優秀賞を受賞。<br/>
                            大手リスキリングサイトにおける生成AI教材の構成案作成・コンテンツ作成を担当した経験を有する。<br/>
                            東京大学寄附講座GCIを修了した後、ヒューマトリックス株式会社を共同創業。<br/>
                        </p>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
