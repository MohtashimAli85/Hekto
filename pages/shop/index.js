import React, { Fragment, useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { createClient } from "../../utils/client";
import NavBar from '../../components/navbar/Nav'
import Product from '../../components/Product/Product'
export default function Home(props) {

    return (
        <Fragment>
            <Product products={props.products} elapsedTime={props.elapsedTime} />
        </Fragment>
    )
}
export const getStaticProps = async () => {
    const startTime = Date.now();
    const client = createClient();
    const { products } = await client.products.list();
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    return {
        props: {
            products,
            elapsedTime
        },
    };
};