// import React, { useState } from "react";
// import { menu, close, logo } from "../assets";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <header className="text-gray-600 body-font" style={{ boxShadow: '0px 5px 7px -3px rgba(0, 0, 0, 0.15)' }}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="PSDEPS Logo" className="w-full h-10 p-2" />
    </Link>
    {/* <input name="email" class="w-2/5 sm:w-3/5 mx-8 flex flex-wrap items-center justify-center rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" /> */}
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="#" className="mr-5 hover:text-gray-900">Mockups</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">Templates</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">PSD</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">CDR</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">EPS</Link>
    </nav>
    
  </div>
</header>
      

        
  );
};

export default Navbar;
