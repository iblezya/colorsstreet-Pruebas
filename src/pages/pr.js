import React from "react"
import { Tarjeta } from "../components"

import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Imgx = styled(Img)`
  -webkit-box-shadow: 3px 5px 18px 5px rgba(81, 60, 188, 0.69);
  box-shadow: 3px 5px 18px 5px rgba(81, 60, 188, 0.69);
  max-width: 100%;
  border-radius: 8px;
  &:hover {
    opacity: 0.7;
  }
`

const CardImg = styled.div`
  max-width: 500px;
  flex: 0 0 500px;
`
const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.65em 0;
  color: tomato;
`

const Card = styled.div`
  max-width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.65em;
`

export const PruebaPage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      producto1: file(relativePath: { eq: "productos/pr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      producto2: file(relativePath: { eq: "productos/pr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      producto3: file(relativePath: { eq: "productos/pr3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      producto4: file(relativePath: { eq: "productos/pr4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      producto5: file(relativePath: { eq: "productos/pr5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      producto6: file(relativePath: { eq: "productos/pr6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Tarjeta>
      <Card>
        <CardImg>
          <Imgx fluid={data.producto1.childImageSharp.fluid} alt="" />
        </CardImg>
        <Text>
          <h1>Producto 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quaerat est aspernatur, fugit dolorem laborum.
          </p>
        </Text>
      </Card>
      <Card>
        <CardImg>
          <Imgx fluid={data.producto2.childImageSharp.fluid} alt="" />
        </CardImg>

        <Text>
          <h1>Producto 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quaerat est aspernatur, fugit dolorem laborum.
          </p>
        </Text>
      </Card>
      <Card>
        <CardImg>
          <Imgx fluid={data.producto3.childImageSharp.fluid} alt="" />
        </CardImg>

        <Text>
          <h1>Producto 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quaerat est aspernatur, fugit dolorem laborum.
          </p>
        </Text>
      </Card>
      <Card>
        <CardImg>
          <Imgx fluid={data.producto4.childImageSharp.fluid} alt="" />
        </CardImg>

        <Text>
          <h1>Producto 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quaerat est aspernatur, fugit dolorem laborum.
          </p>
        </Text>
      </Card>
      <Card>
        <CardImg>
          <Imgx fluid={data.producto5.childImageSharp.fluid} alt="" />
        </CardImg>

        <Text>
          <h1>Producto 5</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quaerat est aspernatur, fugit dolorem laborum.
          </p>
        </Text>
      </Card>
      <Card>
        <CardImg>
          <Imgx fluid={data.producto6.childImageSharp.fluid} alt="" />
        </CardImg>

        <Text>
          <h1>Producto 6</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quaerat est aspernatur, fugit dolorem laborum.
          </p>
        </Text>
      </Card>
    </Tarjeta>
  )
}

export default PruebaPage
