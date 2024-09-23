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
                            <img src="/api/placeholder/400/300" alt="準備中"></img>
                            <div class="news-item-content">
                                <h3>準備中</h3>
                                <p>準備中</p>
                            </div>
                        </div>
                        <div class="news-item">
                            <img src="/api/placeholder/400/300" alt="準備中"></img>
                            <div class="news-item-content">
                                <h3>準備中</h3>
                                <p>準備中</p>
                            </div>
                        </div>
                        <div class="news-item">
                            <img src="/api/placeholder/400/300" alt="準備中"></img>
                            <div class="news-item-content">
                                <h3>準備中</h3>
                                <p>準備中</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}