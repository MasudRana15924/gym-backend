import React, { useState } from 'react';

import { FiMenu, FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { PiUserThin } from 'react-icons/pi'
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { BsArrowRightShort } from "react-icons/bs";
import logo from '../../assets/logo.png'
const navigation = [
    { name: 'Home', to: '/home' },
    { name: 'Shop', to: '/shop' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
]


const Navbar=()=>{
  
    return (
        <div className="w-full lg:w-3/4 mx-auto">
            <di className="w-full flex h-12 bg-yellow-50 justify-between">
                <div>
                 <p className="text-gray-900 font-semibold text-sm mt-2">Free shipping for standing over 5k order</p>
                </div>
                <div className="flex gap-8">
                <p className="text-gray-900 font-semibold text-sm mt-2">Help & FAQS</p>
                 <Link to="/user/login">
                 <p className="text-gray-900 font-semibold text-sm mt-2">Login </p>
                 
                 </Link>
                 <Link to="/user/register">
                 <p className="text-gray-900 font-semibold text-sm mt-2">Register</p>
                 </Link>
                 
                
                </div>

            </di>
            <header className="mt-4">
                <nav className="flex items-center justify-between pr-3 lg:py-4 lg:pr-0" aria-label="Global">
                    <div className="flex lg:flex-1 ">
                        <Link to="/">
                            <img
                                className=" ml-1 h-6  lg:h-8 w-auto "
                                src={logo}
                                alt=""

                            />

                        </Link>
                    </div>
                    
                    <div class="hidden lg:ml-16 lg:flex lg:gap-x-6 2xl:gap-x-12">

                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-md font-semibold leading-6 text-gray-600">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex gap-12 lg:flex-1 lg:justify-end">
                        <div className="flex ">
                            <FiHeart className="text-xl"></FiHeart>
                            <p className="heart-text rounded-full text-gray-500 text-xs">10</p>
                        </div>
                        <div className="flex ">
                            <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
                            <p className="cart-text text-gray-500 text-xs">10</p>
                        </div>

                        <Link to="/user/login">
                            <PiUserThin className="text-xl"></PiUserThin>
                        </Link>

                    </div>
                </nav>
              
            </header>

          
        </div>
    )
}
export default Navbar;