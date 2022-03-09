import React from 'react'
import TopCard from '../ui/TopCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"



// import required modules
// import { Navigation, Autoplay } from "swiper";

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core'

const TopCategories = (props) => {
    const products = props.products;
    const router = useRouter();
    return (
        <div className='mt-20 '>
            <Swiper modules={[Navigation, Autoplay]} navigation={true} className="mySwiper" slidesPerView={4}
                autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false,
                    }
                }
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

                spaceBetween={30}>

                {products && products.map(p => {
                    return (
                        <SwiperSlide key={p.id}>
                            <TopCard id={p.id} thumb={p.thumbnail} title={p.title} variant={p.variants[0]} />

                        </SwiperSlide>
                    )
                })}



            </Swiper>


        </div>
    )
}

export default TopCategories;