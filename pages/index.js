
import Link from "next/link";
import { createClient } from "../utils/client";

import react, { Fragment } from 'react';
import NavBar from '../components/navbar/Nav';
import Header from '../components/header/Header';
import CardSlider from '../components/cardSlider/CardSlider'
import Slider from '../components/slider/Slider';
import LatestProducts from '../components/latestproducts/LatestProducts';
import Offer from '../components/offercard/Offer';
import Banner from '../components/banner/banner';
import Trending from '../components/trending/Trending';
import DiscountBanner from '../components/banner/DiscountBanner';
import TopCategories from '../components/TopCategories/TopCategories';
import SubscribeBanner from '../components/banner/SubscribeBanner';
import Blog from '../components/Blog/Blog';
import Footer from '../components/footer/Footer';
export default function Home({ products }) {
  // const { cart } = useContext(StoreContext)
  console.log(products);
  return (
    <Fragment>

      {/* <Header /> */}
      {/* <NavBar activate='home' /> */}
      <Slider />
      <div className='max-w-7xl mx-auto px-4 mobile:mt-6 mt-16'>
        <h1 className='text-center text-2xl sm:text-3xl mdtext-4xl text-dark-indigo font-bold'>Featured Products</h1>
        <CardSlider products={products} />
      </div>
      <div className='max-w-7xl mx-auto px-4 mt-8'>
        <h1 className='text-center text-2xl sm:text-3xl mdtext-4xl text-navy-blue font-bold'>Latest Products</h1>
        <ul className='flex flex-wrap gap-x-2 gap-y-2 sm:gap-x-3 md:gap-x-5 sm:justify-center my-4 '>
          <li>
            <Link href='/'>
              <a className='text-pink pb-1 border-b-2 border-pink'>New Arrival</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-navy-blue hover:text-pink pb-1 border-b-2 border-transparent hover:border-pink transition'>Best Seller</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-navy-blue hover:text-pink pb-1 border-b-2 border-transparent hover:border-pink transition'>Featured</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-navy-blue hover:text-pink pb-1 border-b-2 border-transparent hover:border-pink transition'>Special Offer</a>
            </Link>
          </li>
        </ul>
        <LatestProducts products={products} />
      </div>
      <div className='max-w-7xl mx-auto px-4 mt-8'>
        <h1 className='text-center text-2xl sm:text-3xl mdtext-4xl text-navy-blue font-bold mb-4'>What Shopex Offer</h1>
        <Offer />
      </div>
      <Banner />
      <div className='max-w-7xl mx-auto px-4 mt-14'>
        <h1 className='text-center text-2xl sm:text-3xl mdtext-4xl text-navy-blue font-bold mb-4'>Trending Products</h1>
        <Trending products={products} />
      </div>
      <div className='max-w-7xl mx-auto px-4 mt-8'>
        <h1 className='text-center text-2xl sm:text-3xl mdtext-4xl text-navy-blue font-bold'>Discount Item</h1>
        <ul className='flex gap-x-5 justify-center my-4 '>
          <li>
            <Link href='/'>
              <a className='text-pink pb-1 border-b-2 border-pink'>Wood Chair</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-navy-blue hover:text-pink pb-1 border-b-2 border-transparent hover:border-pink transition'>Plastic Chair</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-navy-blue hover:text-pink pb-1 border-b-2 border-transparent hover:border-pink transition'>Sofa Collection</a>
            </Link>
          </li>
        </ul>
        <DiscountBanner />
        <div className='mt-8'>
          <h1 className='text-center text-2xl sm:text-3xl mdtext-4xl text-navy-blue font-bold mb-4'>Top Categories</h1>
          <TopCategories products={products} />
        </div>

      </div>
      <div className='mt-8'>
        <SubscribeBanner />
      </div>
      <div className='max-w-7xl mx-auto px-4 mt-8'>
        <h1 className='text-center text-2xl sm:text-3xl mdtext-4xl text-navy-blue font-bold mb-4'>Latest Blog</h1>
        <Blog />
      </div>

    </Fragment>

  );
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
