import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StoreContext from '../../context/store-context';
import { formatPrices, resetOptions } from '../../utils/prices';
import { createClient } from '../../utils/client';

const Card = props => {
    const { cart } = useContext(StoreContext);
    // console.log(formatPrices(cart, props.variant));
    return (
        <div className='group shadow-lg rounded flex-grow-0 flex-shrink-0 basis-72 transition  cursor-pointer' key={props.id}>
            <div className='bg-white-lilac py-4 px-6 rounded-t rounded-r text-center group-hover:bg-desert-storm relative'>
                <div className='flex items-center gap-x-3 invisible group-hover:visible transition-all '>
                    <Link href={{ pathname: '/product/[id]', query: { id: props.id } }} passHref>
                        <Image src='/cart-icon.svg' width={30} height={30} className='bg-white p-1 rounded-full' alt='cart-icon' />
                    </Link>

                    <Image src='/hover-uil_heart-alt.svg' width={17} height={17} alt='whislist' />
                    <Image src='/hover-uil_search-plus.svg' width={17} height={17} alt='search' />
                </div>
                <Image src={props.thumb} width={150} height={150} alt={props.title} objectFit='cover' />
                <div>
                    <Link
                        href={{ pathname: `/product/[id]`, query: { id: props.id } }}
                        passHref
                    >
                        <a className='bg-malachite rounded-0 px-4 py-2 text-white invisible group-hover:visible mx-auto transition-all '>View Details</a>
                    </Link>
                </div>


            </div>
            <div className='py-4 px-6 text-center group-hover:bg-navy-blue transition-all '>
                <p className='text-pink font-lato font-bold group-hover:text-white transition-all '>{props.title}</p>
                <p className='text-navy-blue my-3 group-hover:text-white transition-all '>Code - Y523201</p>
                <p className='text-navy-blue group-hover:text-white transition-all '>{formatPrices(cart, props.variant)}</p>
            </div>
        </div>
    )
}

export default Card;