import React from "react"
import Layout from "../components/Layout"
import ProjectsShowCase from "../sections/homepage/ProjectsShowCase"
import Section1 from "../sections/homepage/Section1"
import Section2 from "../sections/homepage/Section2"
import Section3 from "../sections/homepage/Section3"
import Section4 from "../sections/homepage/Section4"
import Section5 from "../sections/homepage/Section5"

const IndexPage = () => (

  <Layout>
    <Section1/>
    <ProjectsShowCase/>
    <Section2/>
    <div className="bg-black mt-20 py-18   px-5 md:px-20">
      <Section3/>
      <Section4/>
    </div>
    
    <Section5/>

  </Layout>
)

export default IndexPage
