import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FooterWrapper,
  FooterSocialIcons,
  FooterSocialWrapper,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      youtube: file(relativePath: { eq: "youtube.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <div>
        <FooterSocialWrapper>
          <FooterSocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.facebook.publicURL} alt="Facebook icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.linkedin.publicURL} alt="Linkedin icon" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.youtube.publicURL} alt="Youtube icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.instagram.publicURL} alt="Instagram icon" />
            </a>
          </FooterSocialIcons>
          <P size="xSmall" color="dark3">
            Created by Gerson Salas © 2020
          </P>
        </FooterSocialWrapper>
      </div>
    </FooterWrapper>
  )
}
