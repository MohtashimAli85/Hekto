import React from 'react'
import styles from './Subscribe.module.css'
import Link from 'next/link'
function SubscribeBanner() {
    return (
        <div className={`${styles.subBanner} bg-no-repeat bg-cover mobile:h-[300px] h-[400px] text-center flex flex-col justify-center items-center`}>
            <h1 className='text-navy-blue mobile:text-2xl text-3xl my-3 font-bold'>Get Leatest Update By Subscribe
                0ur Newslater</h1>
            <Link href='/shop' passHref>
                <button className='bg-pink rounded-none text-white font-normal px-3 py-2 sm:px-4 sm:py-2 sm:my-3 text-xs sm:text-base'>Shop Now</button>
            </Link>
        </div>
    )
}

export default SubscribeBanner