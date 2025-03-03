import { NavLink } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 border-b border-gray-300 py-3 bg-cyan-100/70">
      {/* Logo */}
      <NavLink to="/">
        <img src="/logo.webp" alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
      </NavLink>
      
      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-gray-600">
        <NavLink to="/topoffers" className="hover:text-blue-700 transition duration-300">
          Top Offers
        </NavLink>
        <NavLink to="/properties" className="hover:text-blue-700 transition duration-300">
          Properties
        </NavLink>
        <NavLink to="/rent" className="hover:text-blue-700 transition duration-300">
          For-Rent
        </NavLink>
        <NavLink to="/buy" className="hover:text-blue-700 transition duration-300">
          For-Buy
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-700 transition duration-300">
          Contact Us
        </NavLink>
      
      </div>

      {/* Authentication Buttons */}
      <div className="flex items-center gap-4 text-gray-500">
      <NavLink 
  to="/Postproperty" 
  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center"
>
  Post Property 
  <span className="relative ml-2 inline-block bg-gradient-to-r from-transparent via-[#baddcc] to-transparent text-transparent bg-[length:200%_200%] animate-[fre__backplay_3s_infinite] transform skew-[150deg]">
    Free
  </span>
</NavLink>

        {!auth ? (
          <>
            <NavLink 
              to="/login" 
              className={({ isActive }) => 
                `transition duration-300 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`
              }
            >
              Login
            </NavLink>
            <NavLink 
              to="/signup" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </NavLink>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition duration-300 cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;