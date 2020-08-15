import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const StyleBGI = styled(BackgroundImage)`
  height: 100vh;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  z-index: 0;
  background-attachment: fixed;
`
const IMG = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`

export const BG = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "bg1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wave: file(relativePath: { eq: "wave.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <StyleBGI
      className={className}
      fluid={data.indexImage.childImageSharp.fluid}
      alt=""
    >
      <IMG src={data.wave.publicURL} alt=""></IMG>
    </StyleBGI>
  )
}
