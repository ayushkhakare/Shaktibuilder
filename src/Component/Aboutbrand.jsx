import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const AboutOurBrand = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src="/hero1.png" 
            alt="About Our Brand" 
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-lg rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
            <FaRegBuilding className="text-blue-600 text-5xl" /> About Our Brand
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Passionate About Properties, Dedicated to Your Vision
          </h2>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            <div>
              <p className="text-5xl font-bold text-blue-600">10+</p>
              <p className="text-gray-700 text-lg">Years of Excellence</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-600">12+</p>
              <p className="text-gray-700 text-lg">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-600">20+ Mn</p>
              <p className="text-gray-700 text-lg">Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-600">25+</p>
              <p className="text-gray-700 text-lg">Ongoing Projects</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-lg max-w-2xl mb-6 leading-relaxed">
            We have been setting industry standards for over a decade. With a strong passion 
            for quality and innovation, our projects redefine excellence and customer satisfaction. 
            Discover a world of architectural brilliance with us!
          </p>
          
          {/* CTA Button */}
          <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutOurBrand;
