import logo from '../assets/logo.png';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
            <div className="flex justify-between items-center">

                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="logo" className="h-10 mr-2" />
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12"></ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center"></div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar