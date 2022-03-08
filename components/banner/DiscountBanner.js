import Image from 'next/image';

const DiscountBanner = props => {

    return (
        <div className='mobile:my-10 sm:my-20'>
            <div className='px-4 flex justify-center  mobile:flex-wrap items-center max-w-5xl mx-auto mr-8'>

                <section className={` self-center  sm:pt-28  `}>

                    <h1 className='text-navy-blue mobile:text-2xl text-3xl my-3 font-bold'>20% Discount Of All Products</h1>
                    <p className='text-pink font-lato font-semibold my-2'>Eams Sofa Compact</p>
                    <p className='text-french-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <ul className='flex flex-wrap gap-4 '>

                        <li className='inline-flex  gap-3 text-spun-pearl font-lato font-normal    '>
                            <span className='mt-2'>
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L6 12L1 7" stroke="#7569B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                            Material expose like metals
                        </li>

                        <li className='inline-flex  gap-3 text-spun-pearl font-lato font-normal    '>
                            <span className='mt-2'>
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L6 12L1 7" stroke="#7569B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                            </span>
                            Clear lines and geomatric figures
                        </li>
                        <li className='inline-flex  gap-3 text-spun-pearl font-lato font-normal    '>
                            <span className='mt-2'>
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L6 12L1 7" stroke="#7569B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                            Simple neutral colours.
                        </li>
                        <li className='inline-flex  gap-3 text-spun-pearl font-lato font-normal    '>
                            <span className='mt-2'>
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L6 12L1 7" stroke="#7569B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                            Material expose like metals
                        </li>
                    </ul>

                    <button className='bg-pink rounded-none text-white font-normal px-6 py-2 mt-5'>Shop Now</button>

                </section>
                <section className='overflow-y-hidden pt-10 sm:basis-10/12'>
                    <Image src='/sofa-3.svg' width={700} height={600} />
                </section>
            </div>
        </div>

    )
}

export default DiscountBanner;