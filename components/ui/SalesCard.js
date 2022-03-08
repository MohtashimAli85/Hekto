import Image from 'next/image';
import Link from 'next/Link';
const SalesCard = props => {

    return (
        <div className={` flex flex-col p-8 ${props.bg} basis-2/6 justify-between flex-auto sm:flex-1`}>
            <div>
                <h1 className='text-dark-indigo text-2xl'>{props.title}</h1>
                <Link href='/'>
                    <a className='text-pink pt-2 border-b-[1px] border-pink'>{props.link}</a>
                </Link>
            </div>
            <Image src={props.src} width={312} height={170} objectFit={'contain'} objectPosition={'right'} className='self-end' />
        </div>
    )
}

export default SalesCard; 