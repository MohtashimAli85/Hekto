import React, { useEffect } from 'react'
import Card from '../ui/Card'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";
const CardSlider = props => {

    const products = props.products;

    return (
        <Swiper modules={[Navigation, Autoplay]} navigation={true} autoplay={
            {
                delay: 2000,
                disableOnInteraction: false,
            }} className="mySwiper" slidesPerView={4}
            spaceBetween={30}

            breakpoints={{
                // when window width is >= 640px

                320: {
                    width: 320,
                    slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 3,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 4,
                }
            }}


        >
            {products && products.map(p => {
                return (
                    <SwiperSlide key={p.id}>
                        <Card id={p.id} thumb={p.thumbnail} title={p.title} variant={p.variants[0]} products={products} />
                    </SwiperSlide>
                )
            })}
        </Swiper>

    )
}

export default CardSlider;