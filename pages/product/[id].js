import React, { useEffect, useState, useContext } from "react";
import Image from "next/image"
import { BiShoppingBag } from "react-icons/bi";
import StoreContext from "../../context/store-context";
import { formatPrice, resetOptions } from "../../utils/helper-functions";
// import styles from "../../styles/product.module.css";
import { createClient } from "../../utils/client";
import { formatPrices } from "../../utils/prices";

const Product = ({ product }) => {
  const { addVariantToCart, cart } = useContext(StoreContext);
  const [options, setOptions] = useState({
    variantId: "",
    quantity: 0,
    size: "",
  });

  useEffect(() => {
    if (product) {
      setOptions(resetOptions(product));
    }
  }, [product]);

  const handleQtyChange = (action) => {
    if (action === "inc") {
      if (
        options.quantity <
        product.variants.find(({ id }) => id === options.variantId)
          .inventory_quantity
      )
        setOptions({
          variantId: options.variantId,
          quantity: options.quantity + 1,
          size: options.size,
        });
    }
    if (action === "dec") {
      if (options.quantity > 1)
        setOptions({
          variantId: options.variantId,
          quantity: options.quantity - 1,
          size: options.size,
        });
    }
  };

  const handleAddToBag = () => {
    console.log(options.variantId);
    addVariantToCart({
      variantId: options.variantId,
      quantity: options.quantity,
    });
    if (product) setOptions(resetOptions(product));
  };

  return (
    <div className='max-w-7xl mx-auto  my-20 mobile:px-4'>
      <div className='flex p-4 shadow-custom gap-10 mobile:flex-col'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-3'>
            {product && product.images.map((i, e) => {
              if (e < 3) {
                return (<Image key={i.id} src={i.url} width={151} height={155} className='rounded-[1px]' alt={product.title} objectFit='cover' />)
              }
            })}
            {/* <Image src={product.images[0]} width={151} height={155} className='rounded-[1px]' alt={product.title} />
            <Image src={product.images[1]} width={151} height={155} className='rounded-[1px]' alt={product.title} />
            <Image src={product.images[2]} width={151} height={155} className='rounded-[1px]' alt={product.title} /> */}
          </div>
          <div className='object-cover  '>
            <Image src={product.thumbnail} width={370} height={480} className='rounded-[1px] w-full h-auto' objectFit='fill' alt={product.title} />
          </div>
        </div>
        <div className='pt-7'>
          <div className=''>
            <span />
            <div className=''>
              <div className="title">
                <h1 className='text-3xl mb-2'>{product.title}</h1>
              </div>
              <p className="text-navy-blue my-2">{formatPrices(cart, product.variants[0])}</p>

              <p className='text-regent-grey max-w-xl'>{product.description}</p>

              <div className='my-3'>
                <p className='text-1xl font-semibold'>Select Size</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants
                    .slice(0)
                    .reverse()
                    .map((v) => {
                      return (
                        <button
                          key={v.id}
                          className={`bg-titan-white p-3 rounded-md transition hover:bg-french-grey ${v.title === options.size ? 'bg-french-grey' : null
                            }`}
                          onClick={() =>
                            setOptions({
                              variantId: v.id,
                              quantity: options.quantity,
                              size: v.title,
                            })
                          }
                        >
                          {v.title}
                        </button>
                      );
                    })}
                </div>
              </div>
              <div className='my-3'>
                <p className='text-1xl font-medium mb-2'>Select Quantity</p>
                <div className='inline-flex items-center text-2xl'>
                  <button

                    onClick={() => handleQtyChange("dec")}
                    className=' bg-lavender-mist rounded-full w-8 h-8  '
                  >
                    -
                  </button>
                  <span className="px-3">{options.quantity}</span>
                  <button
                    className="bg-lavender-mist rounded-full w-8 h-8  "
                    onClick={() => handleQtyChange("inc")}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className='rounded text-white bg-navy-blue px-7 py-2 inline-flex items-center gap-x-2' onClick={() => handleAddToBag()}>
                <span>Add to bag</span>
                <BiShoppingBag />
              </button>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

//create a Medusa client
const client = createClient();

export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const { products } = await client.products.list();

  // Get the paths we want to pre-render based on the products
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the product `id`.
  // If the route is like /product/prod_1, then params.id is 1
  const { product } = await client.products.retrieve(params.id);

  // Pass post data to the page via props
  return { props: { product } };
}

export default Product;
