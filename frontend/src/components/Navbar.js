// import React, { useState } from "react";
// import { menu, close, logo } from "../assets";
import { logo } from "../assets";

const Navbar = () => {
  // const [toggle, setTogggle] = useState(false);
  // const handleClick = () => setTogggle(!toggle);

  return (
    <div className="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]"
          />
        </div>
     
      <div className="">
        <input type="text" className="drop-shadow-md rounded-xl rounded-br-none rounded-tr-none py-2 px-20"/>
        <button className='px-5 py-3 rounded-xl rounded-bl-none rounded-tl-none'><svg className="h-4 w-4 fill-current" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
    </svg></button>
      </div>

        {/* <div className='flex items-center'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Pricing</li>
            </ul>
        </div> */}

        {/* <div className='hidden md:flex sm:mr-10 md:mr-10'>
            <button className='border-none bg-transparent text-black mr-4 '>Login</button>
            <button className='px-8 py-3 '>Sign Up</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
            <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
        </div> */}
      {/* <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Pricing</li>
                
                <div className='flex flex-col my-4'>
                <button className='bg-transparent text-black mb-4 py-3 px-8'>Submit</button>
                <button className='px-8 py-3 '>Contact</button>  
                </div>
              </ul> */}
          </div>
    </div>
  );
};

export default Navbar;
