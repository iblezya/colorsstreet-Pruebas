import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-area: footer;
  line-height: 0.5rem;
  padding: 0.5rem 0.5rem;
  display: flex;
  margin-right: 0;
  margin-left: auto;
  justify-content: right;
  align-items: right;
  z-index: 2;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-area: footer;
    display: flex;
    margin-left: 0;
    justify-content: center;
  }
`
export const FooterSocialWrapper = styled.div`
  text-align: center;
  display: inline-block;
  align-items: center;
`
export const FooterSocialIcons = styled.div`
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
