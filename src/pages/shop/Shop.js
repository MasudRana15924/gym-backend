import React from 'react';
import ProductsList from '../../components/products/ProductsList';


const Shop = () => {

    return (

        <div className="bg-white lg:w-3/4 mx-auto  mt-32 flex flex-1 ">
            <div className="hidden lg:block w-1/4 mt-36">
                <div className="ml-12">
                    <p className="text-start text-gray-500 text-lg mt-8">Color</p>
                    <div className="mt-4">
                        <div className="">
                            <label className="label">

                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="mr-20">Remember me</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <ProductsList></ProductsList>
                <div className="w-3/4 lg:w-1/4 mx-auto">
                <div className="join grid grid-cols-2">
                    <button className="join-item btn btn-outline">Previous page</button>
                    <button className="join-item btn btn-outline">Next</button>
                </div>
                </div>
            </div>
        </div>

    );
};

export default Shop;