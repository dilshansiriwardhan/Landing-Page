import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../constants';
import logo from '../assets/logo.png';
import React from 'react';

const Navbar = () => {
   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

   const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
   };

   return (
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
         <div className="container px-4 mx-auto relative lg:text-sm">
            <div className="flex justify-between items-center">
               <div className="flex items-center flex-shrink-0">
                  <img
                     src={logo}
                     alt="logo"
                     className="h-8 mr-2"
                  />
               </div>

               <ul className="hidden lg:flex ml-14 space-x-12">
                  {navItems.map((item, index) => (
                     <li key={index}>
                        <a href={item.href}>{item.label}</a>
                     </li>
                  ))}
               </ul>

               <div className="hidden lg:flex justify-center space-x-4 items-center">
                  <a
                     href="#"
                     className="py-1 px-3 border rounded-full"
                  >
                     Sign In
                  </a>
                  <a
                     href="#"
                     className="bg-gradient-to-r from-indigo-500 to-purple-500 py-1.5 px-3 rounded-full"
                  >
                     Create an account
                  </a>
               </div>

               <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar}>
                     {mobileDrawerOpen ? <X /> : <Menu />}
                  </button>
                  <div />
               </div>
            </div>
            {mobileDrawerOpen && (
               <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center  lg:hidden text-right">
                  <ul>
                     {navItems.map((item, index) => (
                        <li
                           key={index}
                           className="py-4"
                        >
                           <a href={item.href}>{item.label}</a>
                        </li>
                     ))}
                  </ul>
                  <div className="flex flex-col space-y-6 text-right py-3">
                     <div >
                        <a
                           href="#"
                           className="py-1 px-3 border rounded-full text-center"
                        >
                           Sign In
                        </a>
                     </div>
                     <a
                        href="#"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 py-1.5 px-3 rounded-full"
                     >
                        Create an account
                     </a>
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
