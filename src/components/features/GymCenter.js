import React from 'react';
import gymOne from '../../assets/gum.jpg';
import gymTwo from '../../assets/gym2.jpg';
// import gymThree from '../../assets/gym3.jpgg';

const GymCenter = () => {
    return (
        <div className="lg:w-3/4 mx-auto mt-32">
            <p className="text-start text-3xl font-semibold text-gray-900">Best Gym in Dhaka</p>
            <div className=" grid grid-cols-3 lg:grid-cols-6  gap-4 mt-8">
           <img src={gymOne} alt="" className="w-48 h-48"/>
           <img src={gymTwo} alt="" className="w-48 h-48"/>
           <img src={gymOne} alt="" className="w-48 h-48"/>
           <img src={gymOne} alt="" className="w-48 h-48"/>
           <img src={gymTwo} alt="" className="w-48 h-48"/>
           <img src={gymOne} alt="" className="w-48 h-48"/>
    </div>
        </div>
    );
};

export default GymCenter;