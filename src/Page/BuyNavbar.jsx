import { NavLink } from "react-router-dom"
function BuyNavbar(){
    return<>
       <div>
            <h1 className="text-xl font-bold m-4 text-center">Buy Page</h1>
            <nav className="bg-gray-800 text-white text-center p-4 flex gap-6">
                <NavLink to="/buydukan" className="hover:text-gray-300">Dukan </NavLink>
                <NavLink to="/buyplat" className="hover:text-gray-300">Plat</NavLink>
                <NavLink to="/buyhouse" className="hover:text-gray-300">House</NavLink>
                <NavLink to="/buyland" className="hover:text-gray-300">Land</NavLink>
                <NavLink to="/buyagriculture" className="hover:text-gray-300">Agriculture Land </NavLink>
                <NavLink to="/buymide" className="hover:text-gray-300">MIDC Area</NavLink>
            </nav>
           
        </div>
    </>
}
export default BuyNavbar