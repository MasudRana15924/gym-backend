import React from 'react';
import whey from '../../assets/whey.jpg';
import nutri from '../../assets/sports.jpg';
import weight from '../../assets/weight.jpg';
import vitamin from '../../assets/vitamins.webp';
import drinks from '../../assets/drinks.jpeg';

const Categories = () => {
    return (
        <div className=" grid grid-cols-2 lg:grid-cols-5 lg:w-3/4 mx-auto mt-32 gap-4">
            <div className="flex items-center justify-center border border-yellow-100 rounded-lg p-2">
                <img src={whey} alt="" className="w-12 h-12"/>
                <p className='text-start text-gray-900 font-medium'>Whey Protein</p>
            </div>
            <div className="flex items-center justify-center border border-yellow-100 rounded-lg p-2">
                <img src={nutri} alt="" className="w-12 h-12"/>
                <p className='text-start text-gray-900 font-medium'>Nutrition</p>
            </div>
            <div className="flex items-center justify-center border border-yellow-100 rounded-lg p-2">
                <img src={weight} alt="" className="w-12 h-12"/>
                <p className='text-start text-gray-900 font-medium'>Weight Loss</p>
            </div>
            <div className="flex items-center justify-center border border-yellow-100 rounded-lg p-2">
                <img src={vitamin} alt="" className="w-12 h-12"/>
                <p className='text-start text-gray-900 font-medium'>Vitamins</p>
            </div>
            <div className="flex items-center justify-center border border-yellow-100 rounded-lg p-2">
                <img src={drinks} alt="" className="w-12 h-12"/>
                <p className='text-start text-gray-900 font-medium'>Drinks</p>
            </div>
            
        </div>
    );
};

export default Categories;