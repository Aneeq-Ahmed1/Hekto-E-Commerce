
import Image from 'next/image';
import React from 'react';

const Postcart = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 px-4">
      {/* Featured Products Title */}
      <div className="text-[#1a0b5b] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center">
        Featured Products
      </div>

{/* Product Cards Container */}
<div className="flex flex-wrap justify-between mt-8 gap-4 w-full">
  {/* Product Cards */}
  {['one', '2', '3', '4'].map((item, index) => (
    <div key={index} className="flex-grow-0 flex-shrink-0 w-96 p-2">
      <div className="relative bg-white shadow rounded-lg overflow-hidden">
        {/* Background */}
        <div className="bg-[#f6f7fb] h-60 w-full"></div>

        {/* Image */}
        <Image
          className="absolute left-1/2 top-12 transform -translate-x-1/2"
          src={`/post/${item}.svg`}
          alt="Cantilever Chair"
          width={150}
          height={150}
        />

        {/* Text */}
        <div className="text-center mt-20">
          <p className="text-[#fb2e86] text-lg font-bold font-['Lato']">Cantilever chair</p>
          <p className="text-[#151875] text-sm font-normal font-['Josefin Sans']">Code - Y523201</p>
          <p className="text-[#151875] text-sm font-normal font-['Lato']">$42.00</p>
        </div>
      </div>
    </div>
  ))}
</div>






      

      {/* Line Center-Bottom */}
      <div className="w-full flex justify-center mt-12 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-1 bg-[#fb2e86] rounded-lg"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-4 h-1 bg-[#febad7] rounded-lg"></div>
          ))}
        </div>
      </div>

      <div className="text-[#151875] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center pt-12 pb-8">
        Latest Products
      </div>

      {/* Filter Options */}
      <div className="flex justify-center flex-wrap gap-4 py-5">
        {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((item, index) => (
          <div key={index} className="text-[#151875] text-lg font-normal font-['Lato']">
            {item}
          </div>
        ))}
      </div>

      {/* Product Cards (Latest Products) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {['1', '2', '3', '4', '5', '6'].map((item, index) => (
          <div key={index} className="relative bg-white shadow rounded-lg overflow-hidden">
            <div className="bg-[#f7f7f7] h-64 w-full"></div>
            <Image
              className="absolute left-1/2 top-8 transform -translate-x-1/2"
              src={`/post-2/${item}.svg`}
              alt="Latest Product"
              width={150}
              height={150}
            />
            <div className="text-center mt-4">
              <p className="text-[#151875] text-base font-semibold">Comfort Handy Craft</p>
              <p className="text-[#151875] text-sm">$42.00</p>
              <p className="text-[#fb2448] text-sm line-through">$65.00</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[#151875] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center pt-12 pb-8">
        What Shopex Offers!
      </div>

      {/* Support Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12 pb-12">
        {['1', '2', '3', '4'].map((item, index) => (
          <div key={index} className="relative bg-white shadow rounded-lg overflow-hidden text-center p-6">
            <Image
              className="mx-auto mb-4"
              src={`/support/${item}.svg`}
              alt="Support"
              width={60}
              height={60}
            />
            <p className="text-[#151875] text-xl font-semibold">24/7 Support</p>
            <p className="text-[#1a0b5b]/50 text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postcart;
