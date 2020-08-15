import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "hexan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <FeatureImageWrapper>
      <Img fluid={data.fileName.childImageSharp.fluid} />
    </FeatureImageWrapper>
  )
}
