import React, { useEffect } from 'react'
import Card from '../ui/Card'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRouter } from 'next/router';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
const CardSlider = props => {
    const temp = (swiper) => swiper.destroy();
    const swiper = useSwiper();
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks

        return () => {
            // console.log(swiper);
            // swiper.destroy(true, true)
            // swiper.destroy();
            // swiper.destroy();

        }
    })
    const products = props.products;
    const router = useRouter();
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4}
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

            autoplay={
                router.pathname === '/' ? {
                    delay: 2000,
                    disableOnInteraction: false,
                } : ''}
        >
            {products && products.map(p => {
                return (
                    <SwiperSlide key={p.id}>
                        <Card id={p.id} thumb={p.thumbnail} title={p.title} variant={p.variants[0]} />
                    </SwiperSlide>
                )
            })}
        </Swiper>

    )
}

export default CardSlider;