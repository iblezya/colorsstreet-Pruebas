import React from "react"
import styled from "styled-components"

const TarjetaWrapper = styled.div`
  background-color: black;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`

export const Tarjeta = ({ children }) => {
  return <TarjetaWrapper>{children}</TarjetaWrapper>
}
