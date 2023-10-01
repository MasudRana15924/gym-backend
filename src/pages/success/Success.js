import React from 'react';

const Success = () => {
    return (
        <div className="w-3/4 lg:w-1/4 mx-auto mt-16 lg:mt-32 border rounded-lg">
           <div className="mt-8 m-4">
           <h1 className="text-lg font-medium text-violet-500 text-start">Order Placed Success</h1>
           <h1 className="text-4xl font-medium text-gray-900 text-start mt-4">Thanks for Ordering</h1>
           <p className="text-lg font-medium text-gray-400 text-start mt-4">We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!</p>
           <h1 className="text-xl font-medium text-gray-900 text-start mt-16 font-serif">Tracking Number</h1>
           <h1 className="text-xl font-medium text-violet-500 text-start ">789546123</h1>
           </div>
        </div>
    );
};

export default Success;