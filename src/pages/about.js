import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import cover from "../images/highskillmasters-cover.png"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={cover} alt="High Skill Masters" />
    <h1>About Us</h1>
    <p>
      High Skill Masters is a global community for highly skilled professionals
      in several countries that aimed to be connected worldwide.
    </p>
    <p>
      Are you someone with a high skill set or on the path to mastery? Let's get
      connected!
    </p>
    <p>Join our meetups and network with like-minded professionals.</p>
    <p>
      We gather business owners, entrepreneurs, infopreneurs, executives,
      educators, teachers, mentors, coaches, advisors, engineers, programmers,
      developers, designers, digital marketers, writers, authors, consultants,
      creators, technologists, makers, inventors, photographers, videographers,
      podcasters, influencers, scientists, researchers, speakers, organizers,
      closers, recruiters, travelers, nomads, investors, or your fancy
      professions.
    </p>
  </Layout>
)

export default AboutPage
