import React from 'react'
import Link from 'next/link'
function Footer() {
    return (
        <footer className="footer-1 bg-titan-white py-8 sm:py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-col lg:flex-row  sm:-mx-4 md:py-4 sm:justify-center mobile:gap-5 gap-20">
                    <div className="">
                        <a href="#" className="flex items-center   pb-4  font-bold text-3xl md:text-4xl">
                            Hekto
                        </a>
                        <div className="flex">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email address"
                                className='p-3 rounded-[2px] outline-none '
                            />
                            <button className="bg-pink rounded-[2px] text-white font-normal px-6 py-2">
                                Sign Up
                            </button>
                        </div>
                        <div className='my-2 text-storm-grey mt-4   '>
                            <p>Contact Info</p>
                            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        </div>
                    </div>
                    <div className='flex mobile:gap-5 gap-20 justify-between mobile:flex-col'>
                        <div className="">
                            <h5 className="text-xl font-bold mb-6">Categories</h5>
                            <ul className="list-none footer-links  text-storm-grey">
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Laptops & Computers</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Cameras & Photography</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Smart Phones & Tablets</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Video Games & Consoles</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Waterproof Headphones</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Last time</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h5 className="text-xl font-bold mb-6">Customer Care</h5>
                            <ul className="list-none footer-links text-storm-grey">
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">My Account</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Discount</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Returns</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Orders History</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Order Tracking</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h5 className="text-xl font-bold mb-6">Pages</h5>
                            <ul className="list-none footer-links text-storm-grey">
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Blog</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Browse the Shop</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Category</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Pre-Built Pages</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">Visual Composer Elements</a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href='/'>
                                        <a className="">WooCommerce Pages</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer