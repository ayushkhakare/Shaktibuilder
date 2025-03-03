import { NavLink } from "react-router-dom";
function RentNavbar() {
    return (
        <div>
        <h1 className="text-xl font-bold m-4 text-center">Rent Page</h1>
        <nav className="bg-gray-800 text-white text-center p-4 flex gap-6">
            <NavLink to="/rentdukan" className="hover:text-gray-300">Dukan Rent</NavLink>
            <NavLink to="/rentplat" className="hover:text-gray-300">Plat Rent</NavLink>
            <NavLink to="/renthouse" className="hover:text-gray-300">House Rent</NavLink>
            <NavLink to="/rentland" className="hover:text-gray-300">Land Rent</NavLink>
            <NavLink to="/rentagriculture" className="hover:text-gray-300">Agriculture Land Rent</NavLink>
            <NavLink to="/rentmide" className="hover:text-gray-300">MIDC Area</NavLink>
        </nav>
        </div>
    );
}
export default RentNavbar