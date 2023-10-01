import React from 'react';
import Cart from '../../pages/cart/Cart';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div className=" mt-4  lg:w-3/4 mx-auto lg:flex justify-between gap-8 lg:border lg:rounded-lg">
            <div className="w-full ">
                <div className="lg:w-3/4 mx-auto lg:mt-12">
                    <form className="ml-4 mr-4 lg:ml-0 lg:mr-0">
                        <h2 className="text-start text-xl font-semibold text-gray-900 mb-8">Contact Information </h2>
                        <input type="text" placeholder="Enter Email" className="input input-bordered input-primary w-full  relative left-0" />
                        <div className="flex mt-4 gap-4">
                            <input type="text" placeholder="First Name" className="input input-bordered input-primary w-full  relative left-0" />
                            <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full  relative left-0 " />
                        </div>
                        <div className="lg:flex mt-4 gap-4">
                            <input type="text" placeholder="Address" className="input input-bordered input-primary w-full  relative left-0" />
                            <input type="text" placeholder="Phone" className="input input-bordered input-primary w-full  relative left-0 mt-4 lg:mt-0" />
                        </div>
                        <div className=" mt-12">
                            <h2 className="text-start text-xl font-semibold text-gray-900 mb-8">Payment Method</h2>
                            <div className="flex gap-8 ">
                                <label className="label">

                                    <input type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="ml-4 text-gray-400 font-semibold">Online Payment</span>
                                </label>
                                <label className="label">

                                    <input type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="ml-4 text-gray-400 font-semibold">Cash On Delivery</span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full lg:pr-8  mt-12">
                <div class="flex h-full flex-col bg-white ">
                    <div class="flex-1 px-4  sm:px-6">
                        <div class="flex items-start justify-between">
                            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        </div>

                        <div class="mt-8">
                            <div class="flow-root">
                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                    <li class="flex py-6">
                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <Link href="#">Throwback Hip Bag</Link>
                                                    </h3>
                                                    <p class="ml-4">$90.00</p>
                                                </div>
                                                <p class="text-start mt-1 text-sm text-gray-500">Salmon</p>
                                            </div>
                                            <div class="flex flex-1 items-end justify-between text-sm">
                                                <p class="text-gray-500">Qty 1</p>

                                                <div class="flex">
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="flex py-6">
                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">Medium Stuff Satchel</a>
                                                    </h3>
                                                    <p class="ml-4">$32.00</p>
                                                </div>
                                                <p class="text-start mt-1 text-sm text-gray-500">Blue</p>
                                            </div>
                                            <div class="flex flex-1 items-end justify-between text-sm">
                                                <p class="text-gray-500">Qty 1</p>

                                                <div class="flex">
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class=" px-4 py-6 sm:px-6">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div class="lg:w-2/4 mx-auto mt-6">
                            <Link to="/product/order/success" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Confirm</Link>
                        </div>
                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;