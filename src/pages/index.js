import React from "react"
import { Container, Content, BG, BG2, Producto } from "../components"
import { P, H1c, H2 } from "../elements"
import Typewriter from "typewriter-effect"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const Productos = styled.div`
  grid-area: products;
`

export const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo1.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Container>
      <BG />
      <Content>
        <a href="/">
          <img src={data.logo.publicURL} width="500px" alt="" />
        </a>
        <H1c color="light2">
          <Typewriter
            onInit={typewriter => {
              typewriter.typeString("Bienvenidos.").start()
            }}
          />
        </H1c>
        <P>
          <Typewriter
            options={{
              delay: 200,
            }}
            onInit={typewriter => {
              typewriter
                .typeString("A nuestra tienda virtual. ")

                .start()
                .changeDelay(100)
            }}
          />
        </P>
      </Content>
      <Productos>
        <H2 color="light2" id="pr">
          Nuestros productos en venta
        </H2>
        <Producto />
        <BG2 />
      </Productos>
    </Container>
  )
}
export default IndexPage
