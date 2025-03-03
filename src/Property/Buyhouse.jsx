import React, { useState } from "react";

const buyHouseData = [
  { id: 1, name: "2 BHK Apartment", location: "Rahatgaon", price: 2500000, area: "1000 sq ft", owner: "John Doe", contact: "9876543210", image: "/buyhouse1.jpg" },
  { id: 2, name: "3 BHK Villa", location: "Sai Nagar", price: 5000000, area: "2000 sq ft", owner: "Jane Smith", contact: "9876543211", image: "/buyhouse2.jpg" },
  { id: 3, name: "1 BHK Studio", location: "Gokuldham", price: 1500000, area: "600 sq ft", owner: "Mark Johnson", contact: "9876543212", image: "/buyhouse3.jpg" },
  { id: 4, name: "4 BHK Bungalow", location: "Amber Heights", price: 7000000, area: "2500 sq ft", owner: "Sarah Lee", contact: "9876543213", image: "/buyhouse4.jpg" },
  { id: 5, name: "Duplex House", location: "Dastur Nagar", price: 4500000, area: "1800 sq ft", owner: "Ramesh Patel", contact: "9876543214", image: "/buyhouse5.jpg" }
];

function Buyhouse() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredData = buyHouseData.filter(item =>
    selectedLocation ? item.location === selectedLocation : true
  );

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-md md:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Filter by Location</h2>
        <select 
          className="w-full p-2 border rounded-md" 
          onChange={(e) => setSelectedLocation(e.target.value)}
          value={selectedLocation}
        >
          <option value="">All Locations</option>
          {[...new Set(buyHouseData.map(item => item.location))].map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Listings Section */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2"><strong>Location:</strong> {item.location}</p>
            <p className="text-gray-600 mb-2"><strong>Price:</strong> ${item.price}</p>
            <p className="text-gray-600 mb-2"><strong>Area:</strong> {item.area}</p>
            <p className="text-gray-600 mb-2"><strong>Owner:</strong> {item.owner}</p>
            <p className="text-gray-600"><strong>Contact:</strong> {item.contact}</p>
            <button className="mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buyhouse;
