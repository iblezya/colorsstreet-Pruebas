import React from "react"
import styled from "styled-components"
import { Nav, Footer } from "../components"

const ContainerWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "nav"
    "main"
    "footer";
`

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
