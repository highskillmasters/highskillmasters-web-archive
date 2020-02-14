import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Contact</h1>
    <p>
      <h3>Social Media</h3>
      <ul>
        <li>
          Instagram:{" "}
          <a href="https://instagram.com/highskillmasters">
            https://instagram.com/highskillmasters
          </a>
        </li>
        <li>
          Facebook Page:{" "}
          <a href="https://facebook.com/highskillmasters">
            https://facebook.com/highskillmasters
          </a>
        </li>
        <li>
          Facebook Group:{" "}
          <a href="https://facebook.com/groups/highskillmasters">
            https://facebook.com/groups/highskillmasters
          </a>
        </li>
        <li>
          LinkedIn Group:{" "}
          <a href="https://linkedin.com/groups/10512255">
            https://linkedin.com/groups/10512255
          </a>
        </li>
      </ul>
    </p>
  </Layout>
)

export default Contact
