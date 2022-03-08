
import Image from 'next/image';
import StoreContext from '../../context/store-context';
import { formatPrices } from '../../utils/prices';
import { useContext } from 'react'
import Link from 'next/link'
const Collection = props => {
    const { cart } = useContext(StoreContext);
    return (
        <Link
            href={{ pathname: `/product/[id]`, query: { id: props.id } }}
            passHref
        >
            <div className='flex basis-1/5 gap-4 items-center cursor-pointer'>
                <div className='bg-white-smoke py-2 px-8'>
                    <Image src={props.thumb} width={64} height={71} alt={props.title} />

                </div>
                <div className='text-navy-blue'>
                    <h3 className='font-medium'>{props.title}</h3>
                    <p>{formatPrices(cart, props.variant)}</p>
                </div>
            </div>
        </Link>

    )
}

export default Collection;