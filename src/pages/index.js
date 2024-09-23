// src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Achievements from "../components/achievements"
import News from "../components/news"
import Contact from "../components/contact"

export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
      <Services />
      <Achievements />
      <News />
      <Contact />
    </Layout>
  )
}