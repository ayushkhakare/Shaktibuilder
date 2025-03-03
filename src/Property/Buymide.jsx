import React, { useState } from "react";

const buyMideData = [
  { id: 1, name: "Mid-size Commercial Property", location: "Rahatgaon", price: 5000000, area: "2000 sq ft", owner: "Ramesh Patil", contact: "9876543210", image: "/buymide1.jpg" },
  { id: 2, name: "Warehouse Space", location: "Sai Nagar", price: 7000000, area: "5000 sq ft", owner: "Suresh Yadav", contact: "9876543211", image: "/buymide2.jpg" },
  { id: 3, name: "Office Building", location: "Gokuldham", price: 8000000, area: "3000 sq ft", owner: "Amit Sharma", contact: "9876543212", image: "/buymide3.jpg" },
  { id: 4, name: "Retail Space", location: "Amber Heights", price: 6000000, area: "2500 sq ft", owner: "Vijay Singh", contact: "9876543213", image: "/buymide4.jpg" },
  { id: 5, name: "Manufacturing Unit", location: "Dastur Nagar", price: 9000000, area: "1 Acre", owner: "Rajesh Kumar", contact: "9876543214", image: "/buymide5.jpg" }
];

function BuyMide() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredData = buyMideData.filter(item =>
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
          {[...new Set(buyMideData.map(item => item.location))].map(location => (
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

export default BuyMide;
