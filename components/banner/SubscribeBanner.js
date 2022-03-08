import React from 'react'
import styles from './Subscribe.module.css'
function SubscribeBanner() {
    return (
        <div className={`${styles.subBanner} bg-no-repeat bg-contain mobile:h-[300px] h-[400px] text-center flex flex-col justify-center items-center`}>
            <h1 className='text-navy-blue mobile:text-2xl text-3xl my-3 font-bold'>Get Leatest Update By Subscribe
                0ur Newslater</h1>
            <button className='bg-pink rounded-none text-white font-normal px-6 py-2'>Shop Now</button>
        </div>
    )
}

export default SubscribeBanner