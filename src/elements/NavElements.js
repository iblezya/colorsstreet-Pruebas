import styled from "styled-components"

export const NavWrapper = styled.nav`
  background: rgb(0, 0, 0, 0.75);
  * {
    text-decoration: none;
  }
  grid-area: nav;

  display: flex;
  justify-content: space-between;
  z-index: 3;
`
export const LogoText = styled.h1`
  font-family: ${props => props.theme.fonts.logo};
  color: ${props => (props.primary ? "white" : "#ddedfd")};
  font-size: 41px;
  padding: 0 50px;
  line-height: 65px;
  font-weight: bold;
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 25px;
  }
`
