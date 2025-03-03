import React from 'react';

const propertyData = [
  { id: 1, name: "2 BHK Apartment", description: "Located in the heart of the city, near schools and shopping areas.", image: "/r1.jpg", price: 1500, bedrooms: 2, location: "Rahatgaon", type: "Apartment", owner: "John Doe", contact: "987654****" },
  { id: 2, name: "1 BHK Studio", description: "A cozy studio apartment, perfect for a small family or individuals.", image: "/r2.jpg", price: 800, bedrooms: 1, location: "Arjun Nagar", type: "Studio", owner: "Jane Smith", contact: "987654****" },
  { id: 3, name: "3 BHK Luxury Home", description: "Spacious house with modern amenities and a beautiful garden.", image: "/r3.jpg", price: 2500, bedrooms: 3, location: "Sai Nagar", type: "House", owner: "Mark Johnson", contact: "987655****" },
  { id: 4, name: "3 BHK Villa", description: "Luxurious villa with a swimming pool and garden.", image: "/r4.jpg", price: 3500, bedrooms: 3, location: "Brahmanwada Thadi", type: "Villa", owner: "Sarah Lee", contact: "987656****" },
  { id: 5, name: "1 BHK Flat", description: "Affordable flat with all basic amenities.", image: "/r5.jpg", price: 1000, bedrooms: 1, location: "Dastur Nagar", type: "Flat", owner: "Nina Patel", contact: "987657****" },
  { id: 6, name: "2 BHK House", description: "A well-maintained house with spacious rooms.", image: "/r6.jpg", price: 1800, bedrooms: 2, location: "Sai Nagar", type: "House", owner: "Rajesh Kumar", contact: "987658****" },
  { id: 7, name: "3 BHK Apartment", description: "Modern apartment with all amenities and a scenic view.", image: "/r7.jpg", price: 2200, bedrooms: 3, location: "Kathora Road", type: "Apartment", owner: "Sita Rani", contact: "987659****" },
  { id: 8, name: "4 BHK House", description: "Spacious house with a garden and parking space.", image: "/r8.jpg", price: 4000, bedrooms: 4, location: "Parvati Nagar", type: "House", owner: "Rajiv Verma", contact: "987660****" },
  { id: 9, name: "2 BHK Flat", description: "A well-located flat close to all essential facilities.", image: "/r9.jpg", price: 1300, bedrooms: 2, location: "Gokuldham", type: "Flat", owner: "Prakash Reddy", contact: "987661****" },
  { id: 10, name: "1 BHK Independent House", description: "A small, independent house with a cozy interior.", image: "/r10.jpg", price: 900, bedrooms: 1, location: "Amber Heights", type: "House", owner: "Sunita Yadav", contact: "987662****" },
  { id: 11, name: "3 BHK Apartment", description: "Spacious apartment with a large living room and kitchen.", image: "/r1.jpg", price: 2000, bedrooms: 3, location: "Gajanan Nagar", type: "Apartment", owner: "Pooja Sharma", contact: "987663****" },
  { id: 12, name: "2 BHK Duplex", description: "Beautiful duplex with a modern kitchen and balcony.", image: "/r2.jpg", price: 2300, bedrooms: 2, location: "Kathora Naka", type: "Duplex", owner: "Karan Gupta", contact: "987664****" },
  { id: 13, name: "1 BHK Rental Flat", description: "Affordable flat for rent, ideal for small families or individuals.", image: "/r3.jpg", price: 1100, bedrooms: 1, location: "Shree Nagar", type: "Flat", owner: "Anil Joshi", contact: "987665****" },
  { id: 14, name: "3 BHK Apartment with Balcony", description: "An apartment with a large balcony and spacious bedrooms.", image: "/r4.jpg", price: 2400, bedrooms: 3, location: "Shivaji Nagar", type: "Apartment", owner: "Deepa Ramesh", contact: "987666****" },
  { id: 15, name: "2 BHK Affordable House", description: "Budget-friendly house in a quiet locality.", image: "/r5.jpg", price: 1500, bedrooms: 2, location: "Brahmanwada Thadi", type: "House", owner: "Suresh Yadav", contact: "987667****" },
  { id: 16, name: "Studio Apartment", description: "Compact studio apartment with all essential features.", image: "/r6.jpg", price: 800, bedrooms: 0, location: "Rahatgaon", type: "Studio", owner: "Vijay Singh", contact: "987668****" },
  { id: 17, name: "4 BHK Independent Villa", description: "Spacious villa with private garden and parking space.", image: "/r7.jpg", price: 4500, bedrooms: 4, location: "Shivaji Nagar", type: "Villa", owner: "Meera Kumari", contact: "987669****" },
  { id: 18, name: "3 BHK Modern Apartment", description: "A luxurious apartment with all modern amenities.", image: "/r8.jpg", price: 3000, bedrooms: 3, location: "Gokuldham", type: "Apartment", owner: "Anjali Mishra", contact: "987670****" },
  { id: 19, name: "2 BHK Newly Built House", description: "Brand new house with modern features and a spacious backyard.", image: "/r9.jpg", price: 2000, bedrooms: 2, location: "Shree Nagar", type: "House", owner: "Ravi Pratap", contact: "987671****" },
  { id: 20, name: "3 BHK Furnished House", description: "Fully furnished house with all necessary appliances.", image: "/r10.jpg", price: 2800, bedrooms: 3, location: "Dastur Nagar", type: "House", owner: "Tanvi Shah", contact: "987672****" },
];
const Renthouse = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side Filter Section */}
      <div className="md:w-1/4 w-full bg-gray-100 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Filter Properties</h2>
        
        {/* Filter Section */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Price Range</label>
          <input type="range" min="1000" max="10000" className="w-full" />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Bedrooms</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Location</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter location"
          />
        </div>
        
        {/* Additional Filters (optional) */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
          Apply Filters
        </button>
      </div>

      {/* Right Side Properties Information */}
      <div className="md:w-3/4 w-full p-4">
        <h1 className="text-3xl font-bold mb-6">Available Properties for Rent</h1>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {propertyData.map((property) => (
            <div key={property.id} className="bg-white p-6 rounded-lg shadow-md flex">
              {/* Left Side Image */}
              <div className="w-1/2 pr-4">
                <img
                  src={property.image}
                  alt="Property"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              
              {/* Right Side Text */}
              <div className="w-1/2">
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <p className="text-lg font-bold text-blue-600">${property.price}/month</p>
                
                {/* Owner and Contact Info */}
                <div className="mt-4">
                  <p><strong>Owner:</strong> {property.owner}</p>
                  <p><strong>Contact:</strong> {property.contact}</p>
                </div>

                {/* Buttons */}
                <div className="mt-4">
                  <button className="bg-blue-600 text-white p-2 rounded-md mr-2 hover:bg-blue-700">
                    View More
                  </button>
                  <button className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Renthouse;
