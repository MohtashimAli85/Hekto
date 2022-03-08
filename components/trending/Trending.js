import Collection from "../ui/CollectionCard";
import SalesCard from "../ui/SalesCard";
import TrendingCard from "../ui/TrendingCard";

const Trending = props => {
    const products = props.products;
    return (
        <div>
            <div className='md:pl-4 flex flex-wrap pb-4 gap-5 mb-5 mt-8 max-w-7xl  justify-center'>
                {products && products.map((p, i) => {
                    if (i <= 3) {
                        return (
                            <TrendingCard key={p.id} thumb={p.thumbnail} title={p.title} variant={p.variants[0]} id={p.id} />
                        )
                    }
                })}
            </div>
            <div className='pl-4 flex gap-5 flex-wrap'>
                <SalesCard title="23% off in all products" bg="bg-vista-white" link="Shop Now" src="/watch.png" />
                <SalesCard title="23% off in all products" bg="bg-titan-white" link="View Collection" src="/desk.png" />
                <div className='space-y-4'>
                    {products && products.map((p, i) => {
                        if (i <= 2) {
                            return (
                                <Collection key={p.id} thumb={p.thumbnail} title={p.title} variant={p.variants[0]} id={p.id} />
                            )
                        }
                    })}

                </div>
            </div>
        </div>

    )
}

export default Trending;