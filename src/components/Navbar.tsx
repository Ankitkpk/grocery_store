import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from '../assets/assets';
import { AppContext } from "../context/AppContext";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { user, setUser, setShowUserLogin, navigate } = useContext(AppContext);
  const {searchQuery,setSearchQuery}=useContext(AppContext);

  const logout = async () => {
    setUser(null);
    navigate('/');
  };

  useEffect(()=>{
     if(searchQuery.length > 0){
       navigate('/products');
     }
  },[searchQuery])

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

      <a href="#">
        <img className="h-9" src={assets.logo} alt="Logo" />
      </a>
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        {user && <NavLink to="/products" onClick={() => setOpen(false)}>My Orders</NavLink>}
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
             onChange={(e)=>setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="Search" className="w-4 h-4" />
        </div>

        <div className="relative cursor-pointer">
          <img onClick={()=>navigate('/cart')} src={assets.cart_icon} className="w-6 opacity-80" alt="Cart" />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-6 py-2 bg-green-700 hover:bg-green-800 transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <div className="relative inline-block">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
          />
          <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-20">
            <li onClick={()=>navigate("my-orders")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              My Orders
            </li>
            <li
              onClick={logout}
              className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
        
        )}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <img src={assets.menu_icon} alt="Menu" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden flex">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          {user && <NavLink to="/products" onClick={() => setOpen(false)}>My Orders</NavLink>}
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-green-700 hover:bg-green-800 transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                logout();
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
