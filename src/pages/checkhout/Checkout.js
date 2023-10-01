import React from 'react';
import CheckOut from '../../components/checkout/CheckOut';

const Checkout = () => {
    return (
        <div>
            <div className="lg:w-3/4 mx-auto text-sm breadcrumbs mt-16 pl-2 lg:pl-0">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
            <CheckOut></CheckOut>
        </div>
    );
};

export default Checkout;