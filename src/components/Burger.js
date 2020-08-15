import React, { useState } from "react"
import { BurgerWrapper } from "../elements"
import { RightNav } from "../components"
export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BurgerWrapper open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerWrapper>
      <RightNav open={open} />
    </>
  )
}
