import styled from "styled-components"

export const ContainerWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 65px auto auto 70px;
  grid-template-areas:
    "nav"
    "main"
    "products"
    "footer";
`
