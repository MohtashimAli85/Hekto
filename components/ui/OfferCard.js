import Image from 'next/image';
const OfferCard = props => {

    return (
        <div className='px-4 py-8 shadow-md text-center  flex-auto sm:basis-4/12  md:flex-1 '>
            <Image src={props.src} width={65} height={65} />
            <h1 className='py-3 text-navy-blue font-semibold'>{props.title}</h1>
            <p className='text-newcolor px-[2.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    );
}

export default OfferCard;