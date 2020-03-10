import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <div className="contact__wrapper">
      <h1>Contact</h1>
      <p>I am currently available freelance and full time work.</p>
      <p>Now that we have met, lets connect.</p>
      <div className="contact__links">
        <a href="mailto:akosuakernizan@gmail.com">Email Me</a>
        <a href="https://www.linkedin.com/in/akosuakernizan/">Linkedin</a>
      </div>
    </div>
  </Layout>
)

export default Contact