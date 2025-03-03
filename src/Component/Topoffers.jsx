import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const offersData = [
    { id: 1, image: "/p1.png", title: "Luxury Villa", description: "Modern villa with sea views.", price: "$2,500,000", location: "Los Angeles, CA" },
    { id: 2, image: "/p2.jpg", title: "City Apartment", description: "Stylish apartment with skyline views.", price: "$850,000", location: "New York, NY" },
    { id: 3, image: "/p3.jpg", title: "Cozy Country House", description: "Enjoy countryside living.", price: "$600,000", location: "Austin, TX" },
    { id: 4, image: "/p4.jpg", title: "Luxury Villa", description: "Premium interiors and space.", price: "$2,500,000", location: "San Francisco, CA" },
    { id: 5, image: "/p5.jpg", title: "Modern Condo", description: "Luxury high-rise condo.", price: "$920,000", location: "Miami, FL" },
    { id: 6, image: "/p6.jpg", title: "Lake House", description: "Relax with stunning lake views.", price: "$1,500,000", location: "Chicago, IL" },
    { id: 7, image: "/p7.png", title: "Penthouse Suite", description: "Ultimate luxury living.", price: "$3,200,000", location: "Las Vegas, NV" },
    { id: 8, image: "/p8.png", title: "Suburban Home", description: "Perfect family home.", price: "$750,000", location: "Houston, TX" }
];

function Topoffers() {
    const scrollRef = useRef(null);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Exclusive Property Deals</h1>
            <p className="text-gray-700 text-center text-lg mb-6">Find your dream home with our top offers.</p>

            <div 
                ref={scrollRef} 
                className="flex overflow-x-auto space-x-6 py-6 scrollbar-hide"
            >
                {offersData.map((offer) => (
                    <div key={offer.id} className="flex-shrink-0 w-80 bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <img src={offer.image} alt={offer.title} className="w-full h-52 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900">{offer.title}</h2>
                            <p className="text-gray-600 mt-1">{offer.description}</p>
                            <div className="mt-3 flex justify-between items-center">
                                <span className="text-indigo-600 font-bold text-lg">{offer.price}</span>
                                <span className="text-gray-500 text-sm">{offer.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Topoffers;