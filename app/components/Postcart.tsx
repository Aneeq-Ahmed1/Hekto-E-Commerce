
// import Image from 'next/image';
// import React from 'react';

// const Postcart = () => {
//   return (
//     <div className="flex flex-col justify-center items-center pt-12 px-4">
//       {/* Featured Products Title */}
//       <div className="text-[#1a0b5b] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center">
//         Featured Products
//       </div>

// {/* Product Cards Container */}
// <div className="flex flex-wrap justify-between mt-8 gap-4 w-full">
//   {/* Product Cards */}
//   {['one', '2', '3', '4'].map((item, index) => (
//     <div key={index} className="flex-grow-0 flex-shrink-0 w-96 p-2">
//       <div className="relative bg-white shadow rounded-lg overflow-hidden">
//         {/* Background */}
//         <div className="bg-[#f6f7fb] h-60 w-full"></div>

//         {/* Image */}
//         <Image
//           className="absolute left-1/2 top-12 transform -translate-x-1/2"
//           src={`/post/${item}.svg`}
//           alt="Cantilever Chair"
//           width={150}
//           height={150}
//         />

//         {/* Text */}
//         <div className="text-center mt-20">
//           <p className="text-[#fb2e86] text-lg font-bold font-['Lato']">Cantilever chair</p>
//           <p className="text-[#151875] text-sm font-normal font-['Josefin Sans']">Code - Y523201</p>
//           <p className="text-[#151875] text-sm font-normal font-['Lato']">$42.00</p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>






      

//       {/* Line Center-Bottom */}
//       <div className="w-full flex justify-center mt-12 mb-4">
//         <div className="flex items-center space-x-2">
//           <div className="w-6 h-1 bg-[#fb2e86] rounded-lg"></div>
//           {[...Array(3)].map((_, i) => (
//             <div key={i} className="w-4 h-1 bg-[#febad7] rounded-lg"></div>
//           ))}
//         </div>
//       </div>

//       <div className="text-[#151875] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center pt-12 pb-8">
//         Latest Products
//       </div>

//       {/* Filter Options */}
//       <div className="flex justify-center flex-wrap gap-4 py-5">
//         {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((item, index) => (
//           <div key={index} className="text-[#151875] text-lg font-normal font-['Lato']">
//             {item}
//           </div>
//         ))}
//       </div>

//       {/* Product Cards (Latest Products) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
//         {['1', '2', '3', '4', '5', '6'].map((item, index) => (
//           <div key={index} className="relative bg-white shadow rounded-lg overflow-hidden">
//             <div className="bg-[#f7f7f7] h-64 w-full"></div>
//             <Image
//               className="absolute left-1/2 top-8 transform -translate-x-1/2"
//               src={`/post-2/${item}.svg`}
//               alt="Latest Product"
//               width={150}
//               height={150}
//             />
//             <div className="text-center mt-4">
//               <p className="text-[#151875] text-base font-semibold">Comfort Handy Craft</p>
//               <p className="text-[#151875] text-sm">$42.00</p>
//               <p className="text-[#fb2448] text-sm line-through">$65.00</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-[#151875] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center pt-12 pb-8">
//         What Shopex Offers!
//       </div>

//       {/* Support Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12 pb-12">
//         {['1', '2', '3', '4'].map((item, index) => (
//           <div key={index} className="relative bg-white shadow rounded-lg overflow-hidden text-center p-6">
//             <Image
//               className="mx-auto mb-4"
//               src={`/support/${item}.svg`}
//               alt="Support"
//               width={60}
//               height={60}
//             />
//             <p className="text-[#151875] text-xl font-semibold">24/7 Support</p>
//             <p className="text-[#1a0b5b]/50 text-sm font-normal">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Postcart;




















import Image from 'next/image';
import React from 'react';

const Postcart = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Products Section */}
      <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a0b5b] font-bold font-josefin text-center mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['one' , 2, 3, 4].map((item) => (
            <div key={item} className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#f6f7fb] h-64 flex items-center justify-center">
                <Image
                  src={`/post/${item}.svg`}
                  alt="Product"
                  width={200}
                  height={200}
                  className="object-contain transform group-hover:scale-110 transition-transform"
                />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#fb2e86] mb-2">Cantilever Chair</h3>
                <p className="text-sm text-[#151875] font-josefin mb-1">Code - Y523201</p>
                <p className="text-base font-semibold text-[#151875]">$42.00</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-6 h-1.5 bg-[#fb2e86] rounded-full"></div>
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-4 h-1.5 bg-[#febad7] rounded-full"></div>
          ))}
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#151875] font-bold font-josefin text-center mb-8">
          Latest Products
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((filter) => (
            <button 
              key={filter}
              className="px-4 py-2 text-[#151875] hover:text-white hover:bg-[#fb2e86] rounded-full transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#f7f7f7] h-72 flex items-center justify-center relative">
                <Image
                  src={`/post-2/${item}.svg`}
                  alt="Product"
                  width={200}
                  height={200}
                  className="object-contain"
                />
                <div className="absolute top-2 right-2 bg-[#fb2448] text-white px-3 py-1 rounded-full text-xs">
                  -35%
                </div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#151875] mb-2">Comfort Handy Craft</h3>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[#151875] font-bold">$42.00</span>
                  <span className="text-[#fb2448] line-through text-sm">$65.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#151875] font-bold font-josefin text-center mb-12">
          What Shopex Offers!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="mb-4 inline-block p-4 bg-[#fff6fb] rounded-full">
                <Image
                  src={`/support/${item}.svg`}
                  alt="Feature"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#151875] mb-3">24/7 Support</h3>
              <p className="text-sm text-[#1a0b5b]/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Postcart;
