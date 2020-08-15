import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-area: main;
  position: relative;
  z-index: 1;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-area: main;
    position: relative;
  }
`
