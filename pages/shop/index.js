import React, { Fragment, useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { createClient } from "../../utils/client";
import NavBar from '../../components/navbar/Nav'
import Product from '../../components/Product/Product'
import { useSwiper } from 'swiper/react';
export default function Home({ products }) {
    const swiper = useSwiper();
    useEffect(() => {
        // console.log(swiper);
        // swiper.destroy();
    })
    return (
        <Fragment>
            {/* <Header /> */}
            {/* <NavBar activate='shop' /> */}
            <Product products={products} />
            <Footer />
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