import styled from "styled-components"

export const FooterWrapper2 = styled.footer`
  grid-area: footer;
  line-height: 0.5rem;
  padding: 0.7rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-area: footer;
  }
`
export const FooterSocialWrapper2 = styled.div`
  text-align: center;
  display: inline-block;
  align-items: center;
`
export const FooterSocialIcons2 = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;

  & img {
    height: 30px;
    padding: 0 0.7rem;
    opacity: 0.6;
    transition: 0.3s ease;
  }

  & img:hover {
    opacity: 1;
  }
`
