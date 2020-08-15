import React from "react"
import { RightNavWrapper } from "../elements"
import { Link } from "gatsby"
export const RightNav = ({ open }) => {
  return (
    <RightNavWrapper open={open}>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="#pr">Productos</Link>
      </li>
      <li>
        <Link to="#">Nosotros</Link>
      </li>
      <li>
        <Link to="/contact">Contacto</Link>
      </li>
    </RightNavWrapper>
  )
}
