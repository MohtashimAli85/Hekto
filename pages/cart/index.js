import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { createClient } from "../../utils/client";
import NavBar from '../../components/navbar/Nav'
import Product from '../../components/Product/Product'
import CartView from '../../components/cart-view/cart-view';
export default function Home({ products }) {
    return (
        <Fragment>
            {/* <Header /> */}
            {/* <NavBar activate='shop' /> */}
            <CartView />

        </Fragment>
    )
}
export const getStaticProps = async () => {
    const client = createClient();
    const { products } = await client.products.list();

    return {
        props: {
            products,
        },
    };
};