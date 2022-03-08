
import react, { useEffect, Fragment } from 'react';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './slider.module.css';
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from 'next/router';

// import "./styles.css";

import SwiperCore, { Pagination, Autoplay } from "swiper";
// import required modules
SwiperCore.use([Autoplay])
const Slider = props => {
    const router = useRouter();
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<div class="invisible">' + (index + 1) + '</div>' + "</span>";
        },
    };

    return (
        <Fragment>

            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className="bg-pink"
                autoplay={
                    router.pathname === '/' ? {
                        delay: 2000,
                        disableOnInteraction: false,
                    } : ''}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className=' w-screen xs:pt-8 sm:pt-4 md:pt-0 h-[200px] bs:h-[250px] sm:h-[400px] md:h-[455px] lg:h-[555px] bg-titan-white text-white transition-all ease-in-out duration-1000 transform translate-x-0 slide  '>
                        <div className='px-4 max-w-7xl flex justify-center mx-auto'>
                            <section className={`px-2 self-center font-bold pt-3 sm:pt-8 md:pt-16 lg:pt-28 ${styles.bgImg}`}>
                                <p className='text-pink font-lato text-xs sm:text-sm md:text-base'>Best Furniture For Your Castle....</p>
                                <h1 className='text-black my-2 text-base bs:text-1xl sm:text-3xl md-text-4xl lg:text-5xl  sm:my-3 '>New Furniture Collection
                                    Trends in 2022</h1>
                                <p className='text-wild-blue font-lato my-2 sm:pr-10 md:pr-20 hidden sm:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-pink rounded-none text-white font-normal px-3 py-2 sm:px-4 sm:py-2 sm:my-3 text-xs sm:text-base'>Shop Now</button>
                            </section>
                            <section className='overflow-y-clip pt-10 basis-6/12'>
                                <Image src='/sofa-promotional-header.svg' width={700} height={600} />
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-screen xs:pt-8 sm:pt-4 md:pt-0 h-[200px] bs:h-[250px] sm:h-[400px] md:h-[455px] lg:h-[555px] bg-titan-white text-white transition-all ease-in-out duration-1000 transform translate-x-0 slide  '>
                        <div className='px-4 max-w-7xl flex justify-center mx-auto'>
                            <section className={`px-2 self-center font-bold pt-3 sm:pt-8 md:pt-16 lg:pt-28 ${styles.bgImg}`}>
                                <p className='text-pink font-lato text-xs sm:text-sm md:text-base'>Best Furniture For Your Castle....</p>
                                <h1 className='text-black my-2 text-base bs:text-1xl sm:text-3xl md-text-4xl lg:text-5xl  sm:my-3 '>New Furniture Collection
                                    Trends in 2022</h1>
                                <p className='text-wild-blue font-lato my-2 sm:pr-10 md:pr-20 hidden sm:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-pink rounded-none text-white font-normal px-3 py-2 sm:px-4 sm:py-2 sm:my-3 text-xs sm:text-base'>Shop Now</button>
                            </section>
                            <section className='overflow-y-clip pt-10 basis-6/12'>
                                <Image src='/sofa-promotional-header.svg' width={700} height={600} />
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-screen xs:pt-8 sm:pt-4 md:pt-0 h-[200px] bs:h-[250px] sm:h-[400px] md:h-[455px] lg:h-[555px] bg-titan-white text-white transition-all ease-in-out duration-1000 transform translate-x-0 slide  '>
                        <div className='px-4 max-w-7xl flex justify-center mx-auto'>
                            <section className={`px-2 self-center font-bold pt-3 sm:pt-8 md:pt-16 lg:pt-28 ${styles.bgImg}`}>
                                <p className='text-pink font-lato text-xs sm:text-sm md:text-base'>Best Furniture For Your Castle....</p>
                                <h1 className='text-black my-2 text-base bs:text-1xl sm:text-3xl md-text-4xl lg:text-5xl  sm:my-3 '>New Furniture Collection
                                    Trends in 2022</h1>
                                <p className='text-wild-blue font-lato my-2 sm:pr-10 md:pr-20 hidden sm:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-pink rounded-none text-white font-normal px-3 py-2 sm:px-4 sm:py-2 sm:my-3 text-xs sm:text-base'>Shop Now</button>
                            </section>
                            <section className='overflow-y-clip pt-10 basis-6/12'>
                                <Image src='/sofa-promotional-header.svg' width={700} height={600} />
                            </section>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


            {/* <div className="relative">
                <div className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">Hello</div>
                <div className="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">There</div>
            </div> */}
            {/* <div  >
                <div className="relative overflow-x-clip slider h-[250px] bs:h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
                    <div className='absolute inset-0 w-screen xs:pt-8 sm:pt-4 md:pt-0 h-[200px] bs:h-[250px] sm:h-[400px] md:h-[455px] lg:h-[555px] bg-titan-white text-white transition-all ease-in-out duration-1000 transform translate-x-0 slide  '>
                        <div className='px-4 max-w-7xl flex justify-center mx-auto'>
                            <section className={`px-2 self-center font-bold pt-3 sm:pt-8 md:pt-16 lg:pt-28 ${styles.bgImg}`}>
                                <p className='text-pink font-lato text-xs sm:text-sm md:text-base'>Best Furniture For Your Castle....</p>
                                <h1 className='text-black my-2 text-base bs:text-1xl sm:text-3xl md-text-4xl lg:text-5xl  sm:my-3 '>New Furniture Collection
                                    Trends in 2022</h1>
                                <p className='text-wild-blue font-lato my-2 sm:pr-10 md:pr-20 hidden sm:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-pink rounded-none text-white font-normal px-3 py-2 sm:px-4 sm:py-2 sm:my-3 text-xs sm:text-base'>Shop Now</button>
                            </section>
                            <section className='overflow-y-clip pt-10 basis-6/12'>
                                <Image src='/sofa-promotional-header.svg' width={700} height={600} />
                            </section>
                        </div>
                    </div>
                    <div className='absolute inset-0 w-screen xs:pt-8 sm:pt-4 md:pt-0 h-[200px] bs:h-[250px] sm:h-[400px] md:h-[455px] lg:h-[555px] bg-titan-white text-white transition-all ease-in-out duration-1000 transform translate-x-full  slide  '>
                        <div className='px-4 max-w-7xl flex justify-center mx-auto'>
                            <section className={`px-2 self-center font-bold pt-3 sm:pt-8 md:pt-16 lg:pt-28 ${styles.bgImg}`}>
                                <p className='text-pink font-lato text-xs sm:text-sm md:text-base'>Best Furniture For Your Castle....</p>
                                <h1 className='text-black my-2 text-base bs:text-1xl sm:text-3xl md-text-4xl lg:text-5xl  sm:my-3 '>New Furniture Collection
                                    Trends in 2023</h1>
                                <p className='text-wild-blue font-lato my-2 sm:pr-10 md:pr-20 hidden sm:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-pink rounded-none text-white font-normal px-3 py-2 sm:px-4 sm:py-2 sm:my-3 text-xs sm:text-base'>Shop Now</button>
                            </section>
                            <section className='overflow-y-clip pt-10 basis-6/12'>
                                <Image src='/sofa-promotional-header.svg' width={700} height={600} />
                            </section>
                        </div>
                    </div>
                    <div className='absolute inset-0 w-screen xs:pt-8 sm:pt-4 md:pt-0 h-[200px] bs:h-[250px] sm:h-[400px] md:h-[455px] lg:h-[555px] bg-titan-white text-white transition-all ease-in-out duration-1000 transform translate-x-full slide '>
                        <div className='px-4 max-w-7xl flex justify-center mx-auto'>
                            <section className={`px-2 self-center font-bold pt-3 sm:pt-8 md:pt-16 lg:pt-28 ${styles.bgImg}`}>
                                <p className='text-pink font-lato text-xs sm:text-sm md:text-base'>Best Furniture For Your Castle....</p>
                                <h1 className='text-black my-2 text-base bs:text-1xl sm:text-3xl md-text-4xl lg:text-5xl  sm:my-3 '>New Furniture Collection
                                    Trends in 2024</h1>
                                <p className='text-wild-blue font-lato my-2 sm:pr-10 md:pr-20 hidden sm:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-pink rounded-none text-white font-normal px-3 py-2 sm:px-4 sm:py-2 sm:my-3 text-xs sm:text-base'>Shop Now</button>
                            </section>
                            <section className='overflow-y-clip pt-10 basis-6/12'>
                                <Image src='/sofa-promotional-header.svg' width={700} height={600} />
                            </section>
                        </div>
                    </div>
                </div>
                <section className="flex gap-x-3 absolute inset-0 top-3/4 right-1/2 left-1/2">
                    <span className="dot" data-slide="0" onClick={slideHandler}>
                        <svg className='dot' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.707107" y="7.07104" width="9" height="8.8913" transform="rotate(-45 0.707107 7.07104)" stroke="#FB2E86" />
                        </svg>

                    </span>
                    <span className="dot" data-slide="1" onClick={slideHandler}>
                        <svg className='dot' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.707107" y="7.07104" width="9" height="8.8913" transform="rotate(-45 0.707107 7.07104)" stroke="#FB2E86" />
                        </svg>

                    </span>
                    <span className="dot" className='dot' data-slide="2" onClick={slideHandler}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.707107" y="7.07104" width="9" height="8.8913" transform="rotate(-45 0.707107 7.07104)" stroke="#FB2E86" />
                        </svg>

                    </span>
                </section>
            </div> */}
        </Fragment>


    )
}

export default Slider;