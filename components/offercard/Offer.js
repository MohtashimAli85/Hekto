import OfferCard from '../ui/OfferCard';
const Offer = props => {
    return (
        <div className='pl-4 flex flex-wrap pb-4 gap-5 mb-5 mt-8 max-w-7xl  justify-center'>
            <OfferCard src='/free-delivery.svg' title='24/7 Support' />
            <OfferCard src='/cashback.svg' title='24/7 Support' />
            <OfferCard src='/premium-quality.svg' title='24/7 Support' />
            <OfferCard src='/24-hours-support.svg' title='24/7 Support' />
        </div>
    );
}

export default Offer;