import React from 'react';
import { Link } from 'react-router-dom';
import whey from '../../assets/images (1).jpg';
import wheyTwo from '../../assets/images (2).jpg'
import wheyThree from '../../assets/images.jpg';
import cal from '../../assets/cal.webp';
import gatro from '../../assets/Gatorade-Blue-Bolt-Drink.png';
import wheyFour from '../../assets/sports.jpg';
import vitamin from '../../assets/vitamins.webp';

const Hero = () => {
    return (
        <div className="w-full lg:mt-28 lg:w-3/4 mx-auto ">
            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto w-full  p-4 sm:static sm:px-6  ">
                        <div className="sm:max-w-xl">
                            <h1 className="text-start text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Your fitness products are finally here
                            </h1>
                            <p className="text-start mt-4 text-xl text-gray-500">
                                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                                if you live or die.
                            </p>
                            <div className="w-3/4 lg:w-2/4  mt-4">
                                <Link
                                    to=""
                                    className="w-full inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >
                                    Shop Collection
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-8xl"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-12">
                                        <div className="flex items-center space-x-6 lg:space-x-12">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-12">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src={whey}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={cal}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={vitamin}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={gatro}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={wheyTwo}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={wheyThree}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={wheyFour}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;