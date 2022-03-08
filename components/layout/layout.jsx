import React, { useContext } from "react";
import NavBar from "./nav-bar";
import Blur from "./blur";
import CartView from "../cart-view/cart-view";
import DisplayContext from "../../context/display-context";
// import styles from "../../styles/layout.module.css";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  const { cartView } = useContext(DisplayContext);

  return (
    <div className=''>
      {/* <CartView /> */}
      {/* <Blur /> */}
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
