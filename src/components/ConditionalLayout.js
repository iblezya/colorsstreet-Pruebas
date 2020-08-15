import React from "react"
import Layout from "./layout"
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext className="bg">
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          <Link to={closeTo}>Close</Link>
          {children}
        </React.Fragment>
      ) : (
        <Layout {...rest}>{children}</Layout>
      )
    }
  </ModalRoutingContext>
)

export default ConditionalLayout
