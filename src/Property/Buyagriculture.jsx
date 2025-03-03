import React, { useState } from "react";

const buyAgricultureData = [
  { id: 1, name: "Farm Land", location: "Rahatgaon", price: 500000, area: "5 Acres", owner: "Rajesh Kumar", contact: "9876543210", image: "/buyagri1.jpg" },
  { id: 2, name: "Organic Farm", location: "Sai Nagar", price: 700000, area: "8 Acres", owner: "Amit Sharma", contact: "9876543211", image: "/buyagri2.jpg" },
  { id: 3, name: "Irrigated Land", location: "Gokuldham", price: 650000, area: "6 Acres", owner: "Sunil Yadav", contact: "9876543212", image: "/buyagri3.jpg" },
  { id: 4, name: "Crop Farming Land", location: "Amber Heights", price: 750000, area: "9 Acres", owner: "Vijay Singh", contact: "9876543213", image: "/buyagri4.jpg" },
  { id: 5, name: "Dairy Farm Land", location: "Dastur Nagar", price: 900000, area: "10 Acres", owner: "Ramesh Patel", contact: "9876543214", image: "/buyagri5.jpg" }
];

function Buyagriculture() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredData = buyAgricultureData.filter(item =>
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
          {[...new Set(buyAgricultureData.map(item => item.location))].map(location => (
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
            <button className="mt-4 bg-green-600 text-white p-2 rounded-md hover:bg-green-700">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buyagriculture;