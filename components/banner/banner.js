import Image from 'next/image';

const Banner = props => {

    return (
        <div className='bg-titan-white my-20'>
            <div className='px-4 flex mobile:flex-wrap justify-between mx-auto max-w-5xl'>
                <section className='overflow-y-hidden pt-10 sm:basis-10/12'>
                    <Image src='/sofa-2.svg' width={700} height={600} />
                </section>
                <section className={`px-2 self-center font-bold sm:pt-28 sm:basis-7/12`}>

                    <h1 className='text-black text-4xl my-3 '>New Furniture Collection
                        Trends in 2020</h1>
                    <ul>

                        <li className='inline-flex  gap-3 text-spun-pearl font-lato font-normal'>
                            <span className='mt-2'>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#F52B70" />
                                </svg>
                            </span>
                            All frames constructed with hardwood solids and laminates
                        </li>

                        <li className='inline-flex  gap-3 text-spun-pearl font-lato font-normal'>
                            <span className='mt-2'>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#2B2BF5" />
                                </svg>

                            </span>
                            Reinforced with double wood dowels, glue, screw - nails corner
                            blocks and machine nails
                        </li>
                        <li className='inline-flex  gap-3 text-spun-pearl font-lato font-normal'>
                            <span className='mt-2'>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#2BF5CC" />
                                </svg>
                            </span>
                            All frames constructed with hardwood solids and laminates
                        </li>
                    </ul>
                    <div className='flex gap-x-4 items-center my-3'>
                        <button className='bg-pink rounded-none text-white font-normal px-6 py-2'>Shop Now</button>

                        <div className='text-dark-indigo'>
                            <h6 >B&B Italian Sofa </h6>
                            <p className='font-normal'>$32.00</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Banner;