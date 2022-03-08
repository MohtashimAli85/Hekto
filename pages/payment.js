import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../context/store-context";
import itemStyles from "../styles/cart-view.module.css";
import styles from "../styles/payment.module.css";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "../utils/helper-functions";

const style = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

export const Payment = () => {
  const [order, setOrder] = useState();
  const { cart, completeCart, createCart } = useContext(StoreContext);

  useEffect(() => {
    if (cart.items.length > 0) {
      completeCart().then((order) => {
        setOrder(order);
        createCart();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !order || !styles ? (
    <div style={style}>
      <p>Hang on while we validate your payment...</p>
    </div>
  ) : (
    <div className='max-w-5xl relative flex justify-between flex-col items-center mb-8 border-b-2 border-l-2 px-40 py-20 border-dashed border-[#D2D1D1]  mx-auto'>
      <div><Image src='/completed.svg' width={80} height={80} alt='completed icon' /></div>
      <h1 className='text-4xl font-bold text-navy-blue'>Your Order Is Completed</h1>
      <p className='text-[#8D92A7]  mx-auto text-center my-4'>Thank you for your order! Your order is being processed and will be completed within 3-6
        hours. You will receive an email confirmation when your order is completed.
      </p>
      <div>
        <Link href='/shop' passHref>
          <a className='px-4 py-2 bg-pink mb-4 text-white'>Continue Shopping</a>
        </Link>
      </div>
      <div className='absolute top-0 -left-[2.6rem] bg-white h-40 flex items-end'>
        <Image src='/clock.svg' width={80} height={80} alt='clock' />
      </div>
      <div className='absolute -bottom-8 -right-5'>
        <Image src='/checklist.svg' width={80} height={80} alt='checklist' />
      </div>
      {/* <div className={styles.header}>
        <h1>Order Summary</h1>
        <p>Thank you for your order!</p>
      </div>
      <div className={styles.items}>
        {order.items
          .sort((a, b) => {
            const createdAtA = new Date(a.created_at),
              createdAtB = new Date(b.created_at);

            if (createdAtA < createdAtB) return -1;
            if (createdAtA > createdAtB) return 1;
            return 0;
          })
          .map((i) => {
            return (
              <div key={i.id} className={styles.item}>
                <div className={itemStyles.product}>
                  <figure>
                    <Link
                      href={{
                        pathname: `/product/[id]`,
                        query: { id: i.variant.product.id },
                      }}
                      passHref
                    >
                      <a>
                        <div className={itemStyles.placeholder}>
                          <Image
                            objectFit="cover"
                            height="100%"
                            width="100%"
                            src={i.variant.product.thumbnail}
                            alt={`${i.title}`}
                          />
                        </div>
                      </a>
                    </Link>
                  </figure>
                  <div className={itemStyles.controls}>
                    <div>
                      <div>
                        <Link
                          href={{
                            pathname: `/product/[id]`,
                            query: { id: i.variant.product.id },
                          }}
                          passHref
                        >
                          <a>{i.title}</a>
                        </Link>
                        <p className={itemStyles.size}>
                          Size: {i.variant.title}
                        </p>
                        <p className={itemStyles.size}>
                          Price:{" "}
                          {formatPrice(i.unit_price, order.currency_code)}
                        </p>
                        <p className={itemStyles.size}>
                          Quantity: {i.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.breakdown}>
        <div className={styles.price}>
          <div>Subtotal</div>
          <div>{formatPrice(order.subtotal, order.region.currency_code)}</div>
        </div>
        <div className={styles.price}>
          <div>Shipping</div>
          <div>
            {formatPrice(order.shipping_total, order.region.currency_code)}
          </div>
        </div>
        <div className={`${styles.price} ${styles.total}`}>
          <div>Total</div>
          <div>{formatPrice(order.total, order.region.currency_code)}</div>
        </div>
      </div>
      <div>
        <p>An order confirmation will be sent to you at {order.email}</p>
      </div> */}
    </div>
  );
};

export default Payment;
