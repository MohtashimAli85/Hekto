import Image from 'next/image';
import StoreContext from '../../context/store-context';
import { formatPrices } from '../../utils/prices';
import { useContext } from 'react'
import Link from 'next/link'
const TrendingCard = props => {
    const { cart } = useContext(StoreContext);
    return (
        <Link
            href={{ pathname: `/product/[id]`, query: { id: props.id } }}
            passHref
        >
            <div className='p-2 basis-72 text-center shadow-md cursor-pointer'>
                <div className='bg-white-smoke px-4 py-7'>
                    <Image src={props.thumb} width={171} height={171} objectFit='cover' quality={100} alt={props.title} />
                </div>
                <div className='my-4 text-navy-blue'>
                    <p className=' font-semibold'>{props.title}</p>
                    <p className=''>{formatPrices(cart, props.variant)}<span className='line-through text-transparent-color text-sm'></span></p>
                </div>
            </div>
        </Link>

    );
}

export default TrendingCard;