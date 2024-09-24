// src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Achievements from "../components/achievements"
import News from "../components/news"
import Contact from "../components/contact"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="ヒューマトリックス株式会社 | Humatrix" description="ヒューマトリックス株式会社はAIソリューション事業を展開し、「新たな可能性の母体」となることを目指しております。" />
      <Hero />
      <Services />
      <Achievements />
      <News />
      <Contact />
    </Layout>
  )
}