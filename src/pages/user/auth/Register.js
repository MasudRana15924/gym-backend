import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-24 lg:mt-48 mb-32">
            <div className="px-6 py-4">

                <h3 className="text-start mt-3 text-xl font-medium text-gray-600 dark:text-gray-200">Welcome Back</h3>

                <form>
                    <div className="flex items-center justify-between mt-4 gap-2">
                        <div>
                            
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring placeholder-gray-500" placeholder="First Name"/>
                        </div>

                        <div>
                            
                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring placeholder-gray-500" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center justify-center py-4 text-center  dark:bg-gray-700">
                            <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>

                            <Link to="/user/login" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Sign In</Link>
                        </div>

                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;