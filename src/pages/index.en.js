import React from "react"
import LayoutEN from "../components/en/LayoutEN"
import ProjectsShowCaseEN from "../sections/homepage/en/ProjectsShowCaseEN"
import Section1EN from "../sections/homepage/en/Section1EN"
import Section2EN from "../sections/homepage/en/Section2EN"
import Section3EN from "../sections/homepage/en/Section3EN"
import Section4EN from "../sections/homepage/en/Section4EN"
import Section5EN from "../sections/homepage/en/Section5EN"

const IndexPage = () => (
  <LayoutEN>
    <Section1EN />
    <Section2EN />
    <div className="bg-black mt-20 py-18   px-5 md:px-20">
      <Section3EN />
      <Section4EN />
    </div>
    <Section5EN />
  </LayoutEN>
)

export default IndexPage
