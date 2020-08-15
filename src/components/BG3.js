import React from "react"
//import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../styles/bg-style.css"

export const BG = () => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "futurista.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      style={{
        width: `100%`,
        height: `70vh`,
        gridColumn: `1 / span 4`,
        gridRow: `1 / span 3`,
        zIndex: `1`,
        display: `flex`,
        position: `absolute`,
      }}
      fluid={data.indexImage.childImageSharp.fluid}
    />
  )
}
// className = "bg-hero"
