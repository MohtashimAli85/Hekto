import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import StoreContext from '../../context/store-context';
import { formatPrices } from '../../utils/prices';
import { useContext } from 'react'
const TopCard = props => {
    const { cart } = useContext(StoreContext);
    return (

        <div className='group basis-72 text-center '>
            <div className='bg-white-smoke p-6 rounded-[250px] shadow-md group-hover:bg-titan-white flex flex-col items-center'>
                <Image src={props.thumb} width={171} height={171} objectFit='cover' quality={100} alt={props.title} className='rounded-full' />
                <Link
                    href={{ pathname: `/product/[id]`, query: { id: props.id } }}
                    passHref
                >
                    <button className='bg-malachite rounded-0 mt-3 px-4 py-2 text-white invisible group-hover:visible mx-auto transition-all duration-300'>View Details</button>
                </Link>

            </div>
            <div className='my-4 text-navy-blue'>
                <p className=' font-semibold'>{props.title}</p>
                <p className=''>{formatPrices(cart, props.variant)}<span className='line-through text-transparent-color text-sm'></span></p>
            </div>
        </div>
    )
}



export default TopCard;