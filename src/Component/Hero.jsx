import React from "react";

function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-10 h-screen relative overflow-hidden">
            {/* Left Side - Text Section with Curved Edge */}
            <div className="col-span-3 bg-[#294280] flex items-center justify-end pr-4 md:pr-8 relative py-12">
                <div className="text-white text-left px-6 md:px-8 w-full md:w-[90%] z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">Shree Shakti Builder & Developers</h2>
                    <p className="text-gray-200 text-sm md:text-lg mt-1 text-center md:text-left">By Er. Ashish Agrawal</p>
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 text-center md:text-left">
                        Let Us Find <br className="hidden md:block" /> Your Future Home
                    </h1>
                    <p className="text-base md:text-lg mt-4 text-gray-100 text-center md:text-left">
                        Discover the house of your dreams with our premium projects.
                    </p>

                    <div className="mt-6 relative flex items-center">
                        <input 
                            type="text" 
                            placeholder="Search for properties..." 
                            className="w-full p-3 md:p-4 pl-4 md:pl-5 pr-12 md:pr-14 border border-gray-300 rounded-full bg-gray-900 text-white placeholder-gray-400 focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                        <button className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-5 py-2 md:py-3 rounded-full font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side - Background Image with Overlay */}
            <div 
                className="col-span-7 flex items-center justify-center bg-no-repeat bg-cover bg-center relative px-6 overflow-hidden"
                style={{ 
                    backgroundImage: "url('home3.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    filter: "brightness(85%) contrast(110%)",
                }}
            >
                {/* Overlay for better text contrast on small screens */}
                <div className="absolute inset-0 bg-black bg-opacity-40 md:hidden"></div>
            </div>
        </div>
    );
}

export default Hero;
