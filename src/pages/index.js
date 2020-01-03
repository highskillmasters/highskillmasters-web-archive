import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Homepage from "../components/homepage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homepage></Homepage>
  </Layout>
)

export default IndexPage
