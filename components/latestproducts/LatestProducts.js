import LatestCard from "../ui/LatestCard";


const LatestProducts = props => {
    const products = props.products;
    return (
        <div className='sm:pl-4 flex pb-4 gap-x-5 gap-y-4 md:gap-y-14 mb-5 mt-8 max-w-7xl flex-wrap justify-center'>
            {products && products.map(p => {
                return (
                    <LatestCard key={p.id} thumb={p.thumbnail} title={p.title} variant={p.variants[0]} id={p.id} />
                )
            })}


        </div>
    )
}

export default LatestProducts;