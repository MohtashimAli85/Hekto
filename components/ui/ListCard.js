import Image from 'next/image'
import React from 'react'
import Ratings from './Ratings'
import Link from 'next/link'
import StoreContext from '../../context/store-context';
import { formatPrices } from '../../utils/prices';
import { useContext } from 'react'
function ListCard(props) {
    const { cart } = useContext(StoreContext);
    return (
        <div className=' flex gap-x-5 gap-y-10 max-w-7xl m-5'>
            <Image src={props.thumb} width={300} height={200} alt={props.title} objectFit='cover' />
            <div>
                <div className=''>
                    <div className='my-4'>
                        <p className='text-navy-blue text-2xl font-semibold'>{props.title}</p>
                        <div className='flex gap-x-10 gap-y-4 mb-5'>
                            <p className='text-navy-blue'>{formatPrices(cart, props.variant)}<span className='line-through text-pink text-sm'></span></p>
                            <Ratings />
                        </div>
                        <p className='text-regent-grey max-w-xl'>{props.desc}</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-3    '>
                    <Image src='/cart-icon.svg' width={30} height={30} className='bg-white p-1 rounded-full' alt='cart icon' />
                    <Image src='/hover-uil_heart-alt.svg' width={17} height={17} alt='whislit icon' />
                    <Image src='/hover-uil_search-plus.svg' width={17} height={17} alt='search icon' />
                </div>
            </div>
        </div>


    )
}

export default ListCard