import React, { useState } from "react";

const buyPlatData = [
  { id: 1, name: "Residential Plot", location: "Rahatgaon", price: 2000000, area: "1500 sq ft", owner: "Ramesh Patil", contact: "9876543210", image: "/buyplat1.jpg" },
  { id: 2, name: "Commercial Land", location: "Sai Nagar", price: 5000000, area: "3000 sq ft", owner: "Suresh Yadav", contact: "9876543211", image: "/buyplat2.jpg" },
  { id: 3, name: "Agricultural Land", location: "Gokuldham", price: 3500000, area: "2 Acres", owner: "Amit Sharma", contact: "9876543212", image: "/buyplat3.jpg" },
  { id: 4, name: "Industrial Plot", location: "Amber Heights", price: 8000000, area: "5000 sq ft", owner: "Vijay Singh", contact: "9876543213", image: "/buyplat4.jpg" },
  { id: 5, name: "Investment Land", location: "Dastur Nagar", price: 4500000, area: "2500 sq ft", owner: "Rajesh Kumar", contact: "9876543214", image: "/buyplat5.jpg" }
];

function Buyplat() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredData = buyPlatData.filter(item =>
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
          {[...new Set(buyPlatData.map(item => item.location))].map(location => (
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

export default Buyplat;