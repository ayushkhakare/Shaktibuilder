import { AiOutlineHome, AiOutlineExpandAlt } from "react-icons/ai";
import { FaBath, FaBed } from "react-icons/fa";
import { GiKitchenScale } from "react-icons/gi";

const propertiesList = [
  {
    id: 1,
    title: "3 BHK House in Tapovan, Amravati",
    location: "Chatrapati Colony",
    type: "Independent House/Villa",
    listingType: "Resale",
    price: "₹56 Lac",
    pricePerSqft: "₹5,600 /sqft",
    area: "1,000 sqft",
    bhk: "3 BHK",
    bathrooms: 3,
    status: "Ready To Move",
    postedBy: "Owner",
    postedTime: "1 month ago",
    contact: "View Number",
    image: "/p1.png"
  },
  {
    id: 2,
    title: "2 BHK Apartment in Sai Nagar, Amravati",
    location: "Sai Nagar",
    type: "Residential Apartment",
    listingType: "New Launch",
    price: "₹40 Lac",
    pricePerSqft: "₹4,500 /sqft",
    area: "900 sqft",
    bhk: "2 BHK",
    bathrooms: 2,
    status: "Under Construction",
    postedBy: "Builder",
    postedTime: "2 weeks ago",
    contact: "View Number",
    image:"/p2.jpg"
  },
  {
    id: 3,
    title: "4 BHK Villa in Kathora Road, Amravati",
    location: "Kathora Road",
    type: "Independent House/Villa",
    listingType: "Resale",
    price: "₹1.2 Crore",
    pricePerSqft: "₹6,000 /sqft",
    area: "2,000 sqft",
    bhk: "4 BHK",
    bathrooms: 4,
    status: "Ready To Move",
    postedBy: "Dealer",
    postedTime: "3 days ago",
    contact: "View Number",
    image: "/p3.jpg"
  },
  {
    id: 4,
    title: "1 RK House in Dastur Nagar, Amravati",
    location: "Dastur Nagar",
    type: "Independent House/Villa",
    listingType: "Resale",
    price: "₹25 Lac",
    pricePerSqft: "₹3,800 /sqft",
    area: "650 sqft",
    bhk: "1 RK",
    bathrooms: 1,
    status: "Ready To Move",
    postedBy: "Owner",
    postedTime: "2 months ago",
    contact: "View Number",
    image: "/p4.jpg"
  },
  {
    id: 5,
    title: "Farmhouse in Akoli, Amravati",
    location: "Akoli",
    type: "Farm House",
    listingType: "New Launch",
    price: "₹2.5 Crore",
    pricePerSqft: "₹8,000 /sqft",
    area: "5,000 sqft",
    bhk: "5 BHK",
    bathrooms: 5,
    status: "Under Construction",
    postedBy: "Builder",
    postedTime: "5 days ago",
    contact: "View Number",
    image: "/p5.jpg"
  },
  {
    id: 6,
    title: "Luxury Penthouse in Mumbai",
    location: "Marine Drive, Mumbai",
    type: "Penthouse",
    listingType: "Resale",
    price: "₹10 Crore",
    pricePerSqft: "₹25,000 /sqft",
    area: "4,000 sqft",
    bhk: "4 BHK",
    bathrooms: 5,
    status: "Ready To Move",
    postedBy: "Dealer",
    postedTime: "1 week ago",
    contact: "View Number",
    image: "/p6.jpg"
  },
  {
    id: 7,
    title: "Duplex Villa in Pune",
    location: "Koregaon Park, Pune",
    type: "Independent House/Villa",
    listingType: "New Launch",
    price: "₹4.2 Crore",
    pricePerSqft: "₹12,000 /sqft",
    area: "3,500 sqft",
    bhk: "4 BHK",
    bathrooms: 4,
    status: "Under Construction",
    postedBy: "Builder",
    postedTime: "2 weeks ago",
    contact: "View Number",
    image: "p7.png"
  },
  {
    id: 8,
    title: "3 BHK Flat in Nagpur",
    location: "Dharampeth, Nagpur",
    type: "Residential Apartment",
    listingType: "Resale",
    price: "₹80 Lac",
    pricePerSqft: "₹6,500 /sqft",
    area: "1,200 sqft",
    bhk: "3 BHK",
    bathrooms: 2,
    status: "Ready To Move",
    postedBy: "Owner",
    postedTime: "3 weeks ago",
    contact: "View Number",
    image: "p8.png"
  },
  // Add more properties here if needed
];

function Properties() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Available Properties
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Find your dream home from our top listings.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {propertiesList.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full">
            {/* Image Section */}
            <div className="w-full h-64 relative">
              <img src={property.image} alt={property.title} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            {/* Property Information Section */}
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
              <p className="text-gray-600 text-sm">{property.location}</p>
              <p className="text-blue-600 font-bold text-xl mt-2">{property.price}</p>
              <div className="mt-3 text-gray-700 text-sm flex flex-wrap gap-3">
                <span className="flex items-center gap-1">
                  <AiOutlineExpandAlt className="text-gray-600" /> {property.area}
                </span>
                <span className="flex items-center gap-1">
                  <FaBed className="text-gray-600" /> {property.bhk}
                </span>
                <span className="flex items-center gap-1">
                  <FaBath className="text-gray-600" /> {property.bathrooms}
                </span>
                <span className="flex items-center gap-1">
                  <GiKitchenScale className="text-gray-600" /> {property.status}
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-1">
                {property.listingType} | Posted {property.postedTime} by {property.postedBy}
              </p>
              <div className="flex gap-4 mt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md">
                  {property.contact}
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-md">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
