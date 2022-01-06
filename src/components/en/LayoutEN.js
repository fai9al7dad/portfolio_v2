
import * as React from "react"
import { Helmet } from "react-helmet"
import "@fontsource/cairo/400.css" // Defaults to weight 400.
import "@fontsource/cairo/700.css" // Defaults to weight 400.
import NavbarEN from "./NavbarEN"
import FooterEN from "./FooterEN"
import MobileNavbarEN from "./MobileNavbarEN"

const LayoutEN = ({ children }) => {
  return (
    <div className="font relative bg-gray-50">
          <Helmet>
                <title>فيصل حداد | Faisal haddad</title>
                <meta name="og:title" content="فيصل حداد | Faisal haddad"/>
                <meta name="description" content="مبرمج ومصمم مواقع وتطبيقات، أساعدك في وضع أفكارك وطموحاتك على العالم التقني"/>
                <meta name="og:description" content="مبرمج ومصمم مواقع وتطبيقات، أساعدك في وضع أفكارك وطموحاتك على العالم التقني"/>
                <link rel="canonical" href="https://faisalhaddad.com" />
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <NavbarEN/>
      {children}
      <MobileNavbarEN/>
      <FooterEN/>
    </div>
  )
}


export default LayoutEN
