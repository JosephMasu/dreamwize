import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './icons/Logo';
import { HiOutlineX } from 'react-icons/hi';

interface NavbarProps {
  scrollToFooter: () => void; 
  scrollToHowToApply: () => void; 
  scrollToApplyFaster: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({ scrollToFooter, scrollToHowToApply, scrollToApplyFaster }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const whatsappNumber = '+256754888626';
  const message = 'Hello, I got this number from DreamWise web site...'; 

  return (
    <nav className="bg-white shadow-custom-light-blue sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-8 px-30 lg:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center flex-grow">
          <Link href="/" className="flex items-center">
            <Logo />
            <h1 className="text-dream-black font-Figtree font-light ml-2 text-xl sm:text-2xl">
              Dream <span className="font-bold">Wize.</span>
            </h1>
          </Link>
        </div>

        <ul className="hidden lg:flex space-x-8 ml-auto">
          <li>
            <button onClick={scrollToFooter} className="text-dream-black font-Figtree hover:text-gray-600 text-sm md:text-base">
              About Us
            </button>
          </li>
          <li>
            <button onClick={scrollToHowToApply} className="text-dream-black font-Figtree hover:text-gray-600 text-sm md:text-base">
              How to find programs
            </button>
          </li>
          <li>
            <button onClick={scrollToApplyFaster} className="text-dream-black font-Figtree hover:text-gray-600 text-sm md:text-base">
              How to apply
            </button>
          </li>
        </ul>

        <button className="hidden lg:block px-4 ml-10 py-2 bg-bg-custom-gradient border-green-600 bg-dream-bg-green border-2 text-dream-black font-Figtree rounded-md hover:bg-green-200">
          Find counsellor
        </button>

        <div className="block lg:hidden">
          <button onClick={handleToggle} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full h-full bg-white z-50 flex flex-col py-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={handleToggle} className="self-end px-4 py-2 text-black hover:text-gray-600">
          <HiOutlineX className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-start space-y-4 px-4">
          <li>
            <button
              onClick={() => {
                scrollToFooter(); 
                setIsOpen(false); 
              }}
              className="text-black font-Figtree font-normal hover:text-gray-600 text-base"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToHowToApply(); 
                setIsOpen(false); 
              }}
              className="text-black font-Figtree font-normal hover:text-gray-600 text-base"
            >
              How to find programs
            </button>
          </li>
          <li>
            <button onClick={() => {
                scrollToApplyFaster(); 
                setIsOpen(false); 
              }} className="text-black font-Figtree font-normal hover:text-gray-600 text-base">
              How to apply
            </button>
          </li>
          <li>
          <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                >
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Contact Us
            </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
