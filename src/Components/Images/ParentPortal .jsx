import React from 'react';
import logo from './logo.jpeg';


const ParentPortal = () => {
    return (
        <div className='flex justify-center mt-10 mb-10'>
            <div className="w-[63%]  shadow-md bg-gray-100 flex flex-col items-center justify-center ">
                {/* Title */}
                <div className='flex justify-evenly space-x-10 items-center py-5 bg-blue-700 w-full'>
                    <img src={logo} className='h-20 w' />
                    <h1 className="text-3xl font-bold text-center text-white mb-4">
                        PARENT PORTAL - THE INDIAN PUBLIC SCHOOL
                    </h1>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-[10px] mt-10 w-full max-w-md p-6 space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">User Name</label>
                        <input
                            type="text"
                            placeholder="UserName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                        />
                    </div>

                    {/* Login Button */}
                    <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-[#adefee] transition">
                        Login
                    </button>
                </div>

                {/* Links and Description */}
                <div className="mt-10 w-full flex flex-col md:flex-row gap-8 px-10 border-t ">
                    {/* Left Section - Links */}
                    <div className="w-full md:w-[20rem] border-r mt-6 mb-6">
                        <h2 className="text-xl font-bold mb-4">LINKS RELATED TO TIPS</h2>

                        <div className="flex flex-col space-y-3">
                            <div href="#" className=" font-semibold">
                                Know Your Parent
                            </div>
                            <button className=' ml-5 w-52 py-2 bg-blue-600 text-white'> Know Your Parent</button>
                            <div href="#" className=" font-semibold ">
                                Student Registration
                            </div>
                            <button className=' ml-5 w-52 py-2 bg-blue-600 text-white'>  Student Registration</button>
                        </div>
                    </div>

                    {/* Right Section - Paragraph */}
                    <div className="flex-1 text-gray-700 leading-relaxed text-lg pb-5 mt-6">
                        <p>
                            The Indian Public School strives to develop young people to become active, compassionate, and lifelong learners
                            who can help create a better and more peaceful world. School provides best-in-class education for boys and girls
                            in India and abroad. Since beginning our journey in 2004, we have been working toward preparing well-rounded,
                            independent, caring, and confident young adults who are driven to make a difference in the world. The Indian Public
                            School is a day and boarding school providing a serene environment with state-of-the-art infrastructure. We involve
                            local community and stakeholders in the teaching-learning process.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ParentPortal;
