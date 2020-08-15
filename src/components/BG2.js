import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const StyleBGI2 = styled(BackgroundImage)`
  height: 100vh;
  grid-column: 1 / 2;
  grid-row: 3/4;
  z-index: 1;
`

export const BG2 = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "acuarela.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2553, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyleBGI2
      className={className}
      fluid={data.indexImage.childImageSharp.fluid}
    />
  )
}
