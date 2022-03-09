import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Card from '../ui/Card';
import Image from 'next/image';
import ListCard from '../ui/ListCard';
function Product(props) {
    const products = props.products;
    console.log(products);
    const getInputHandler = props => {
        setNumProducts(props.target.value);
    }
    const viewHandler = props => {
        let view = props.target.id;
        console.log(view);
        if (view == 'grid') {
            setView({
                gridView: true,
                listView: false
            })
            return;
        }
        setView({
            gridView: false,
            listView: true
        })
    }
    const [Numproducts, setNumProducts] = useState(products.length);
    const [productArr, setProductArr] = useState(products);
    const [view, setView] = useState({
        gridView: true,
        listView: false
    });


    return (
        <div className='max-w-7xl mx-auto px-4 mobile:mt-6 mt-16'>
            <div className='flex justify-between items-center'>
                <div className='space-y-2'>
                    <h1 className='text-navy-blue font-bold'>Ecommerce Acceories & Fashion item </h1>
                    <p className='text-sm font-lato'>About {products.length} results ({props.elapsedTime} seconds)</p>
                </div>
                <div className='text-blue-berry flex gap-x-3'>
                    <div className='flex gap-x-1 items-center'>
                        <p>Per Page:</p>
                        <input type='number' min='1' max={products.length} className='border border-lavender-mist px-3' onChange={getInputHandler} />
                    </div>
                    <div className='flex gap-x-1 items-center'>
                        <label htmlFor='products'>Sort By:</label>
                        <select name="products" id="products" className='outline-none border border-lavender-mist p-2 text-wild-blue'>
                            <option value="bestmatch" className='text-black'>Best Match</option>
                            <option value="bestmatch" className='text-black'>Best Match</option>
                            <option value="bestmatch" className='text-black'>Best Match</option>
                        </select>
                    </div>
                    <div className='flex gap-x-1 items-center'>
                        View:
                        <div className='inline-flex gap-x-1 items-center'>
                            <Image src='/grid-view.svg' width={25} height={25} id='grid'
                                className={`p-1 ${view.gridView ? 'bg-lavender-mist' : ''}`}
                                onClick={viewHandler}
                                alt='pw' />
                            <Image src='/list-view.svg' width={25} height={25} id='list'
                                className={`p-1 ${view.listView ? 'bg-lavender-mist' : ''}`}
                                onClick={viewHandler}
                                alt='pw' />
                        </div>
                    </div>
                </div>
            </div>
            {view.gridView ? <div className='grid grid-cols-4 gap-20 py-5 products'>
                {products && products.map((p, i) => {
                    if (i < Numproducts)
                        return (<Card key={p.id} id={p.id} thumb={p.thumbnail} variant={p.variant} title={p.title} />)
                })}
            </div> : ''}
            {view.listView ?
                <div>
                    {products && products.map((p, i) => {
                        if (i < Numproducts) {
                            return (<ListCard key={p.id} id={p.id} thumb={p.thumbnail} variant={p.variant} title={p.title} desc={p.description} />)
                        }
                    })}

                </div>
                : ''}

        </div>
    )
}

export default Product