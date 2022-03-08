
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState, Fragment } from "react"
import { BiShoppingBag } from "react-icons/bi"
import DisplayContext from "../../context/display-context"
import StoreContext from "../../context/store-context"

import { quantity, sum } from "../../utils/helper-functions"
import Header from "../header/Header"
import Nav from "../navbar/Nav"

export const NavBar = () => {
  const { updateCartViewDisplay } = useContext(DisplayContext)
  const { cart } = useContext(StoreContext)
  const [isCheckout, setIsCheckout] = useState(true)

  const router = useRouter()

  useEffect(() => {
    if (router.pathname === "/checkout" || router.pathname === "/payment") {
      setIsCheckout(true)
    } else {
      setIsCheckout(false)
    }
  }, [router.pathname])

  return (
    <Fragment>
      <Header updateCartViewDisplay={updateCartViewDisplay} cart={cart} isCheckout={isCheckout} />
      <Nav />
    </Fragment>
  )
}

export default NavBar
