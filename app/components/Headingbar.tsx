
// "use client";

// import React, { useState } from 'react';
// import { GlobeAltIcon, CurrencyDollarIcon, UserIcon, HeartIcon } from '@heroicons/react/24/solid';
// import { ShoppingCartIcon,  } from '@heroicons/react/24/outline'; // Added Bars3Icon (hamburger icon)

// const Headingbar = () => {
//   const [isMenuOpen, ] = useState(false); // state to toggle the menu

//   return (
//     <div className="flex flex-col text-base font-semibold whitespace-nowrap text-zinc-100">
//       <div className="flex flex-col justify-center items-center px-4 sm:px-10 lg:px-16 py-2.5 w-full bg-violet-600">
//         <div className="flex flex-wrap gap-5 w-full max-w-screen-xl justify-between">
//           {/* Left Section: User Info */}
//           <div className="flex gap-6 sm:gap-8 my-auto" role="list">
//             <div className="text-[#f1f1f1] text-sm sm:text-base">mhhasanul@gmail.com</div>
//             <div className="text-[#f1f1f1] text-sm sm:text-base">(12345)67890</div>
//           </div>

//           {/* Right Section: Language, Currency, Login & Wishlist */}
//           <div className="flex gap-4 sm:gap-6 justify-end items-center">
//             <div className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] flex items-center">
//               <GlobeAltIcon className="h-5 w-5 mr-2" />
//               English
//             </div>
//             <div className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] flex items-center">
//               <CurrencyDollarIcon className="h-5 w-5 mr-2" />
//               USD
//             </div>
//             <a href="/Login" className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
//               <UserIcon className="h-5 w-5 mr-2" />
//               Login
//             </a>
//             <div className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
//               <HeartIcon className="h-5 w-5 mr-2" />
//               Wishlist
//             </div>
//             {/* Cart */}
//             <a href="/Cart" className="cursor-pointer hover:text-gray-200">
//               <ShoppingCartIcon className="h-7 w-7 text-[#f1f1f1]" />
//             </a>
//           </div>
//         </div>
        
//         {/* Hamburger Menu for Mobile */}
//         {/* <div className="sm:hidden flex justify-between items-center w-full mt-4">
//           <Bars3Icon className="h-6 w-6 text-[#f1f1f1]" onClick={() => setIsMenuOpen(!isMenuOpen)} />
//         </div> */}
        
//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="sm:hidden flex flex-col gap-4 mt-4 text-[#f1f1f1]">
//             <a href="/Login" className="text-base font-semibold font-['Josefin Sans'] flex items-center">
//               <UserIcon className="h-5 w-5 mr-2" />
//               Login
//             </a>
//             <div className="text-base font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
//               <HeartIcon className="h-5 w-5 mr-2" />
//               Wishlist
//             </div>
//             <a href="/Cart" className="cursor-pointer hover:text-gray-200">
//               <ShoppingCartIcon className="h-7 w-7 text-[#f1f1f1]" />
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Headingbar;






"use client";

import React from 'react';
import { GlobeAltIcon, CurrencyDollarIcon, UserIcon, HeartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Headingbar = () => {
  return (
    <div className="flex flex-col text-base font-semibold whitespace-nowrap text-zinc-100">
      <div className="flex flex-col justify-center items-center px-4 sm:px-10 lg:px-16 py-2.5 w-full bg-violet-600">
        <div className="flex flex-wrap gap-4 sm:gap-6 w-full max-w-screen-xl justify-between">
          {/* Left Section: User Info */}
          <div className="flex gap-6 sm:gap-8 my-auto" role="list">
            <div className="text-[#f1f1f1] text-sm sm:text-base">mhhasanul@gmail.com</div>
            <div className="text-[#f1f1f1] text-sm sm:text-base">(12345)67890</div>
          </div>

          {/* Right Section: Language, Currency, Login & Cart */}
          <div className="flex gap-4 sm:gap-6 justify-end items-center flex-nowrap w-full sm:w-auto">
            <div className="text-[#f1f1f1] text-xs sm:text-sm font-semibold font-['Josefin Sans'] flex items-center">
              <GlobeAltIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              English
            </div>
            <div className="text-[#f1f1f1] text-xs sm:text-sm font-semibold font-['Josefin Sans'] flex items-center">
              <CurrencyDollarIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              USD
            </div>
            <a href="/Login" className="text-[#f1f1f1] text-xs sm:text-sm font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
              <UserIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              Login
            </a>
            <div className="text-[#f1f1f1] text-xs sm:text-sm font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
              <HeartIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              Wishlist
            </div>
            {/* Cart */}
            {/* <a href="/Cart" className="cursor-pointer hover:text-gray-200">
              <ShoppingCartIcon className="h-5 sm:h-7 w-5 sm:w-7 text-[#f1f1f1]" />
              Cart
            </a> */}
            <a href="/Cart" className="text-[#f1f1f1] text-xs sm:text-sm font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
              <ShoppingCartIcon className="h-5 sm:h-7 w-5 sm:w-7 text-[#f1f1f1]" />
              Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headingbar;
