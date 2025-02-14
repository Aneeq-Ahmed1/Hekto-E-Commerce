// import Image from 'next/image'
// import React from 'react' 

// const Trending = () => {
//   return (
//     <div>
//       <div className="flex flex-col justify-center items-center pt-12">
//   {/* Featured Products Title */}
//   <div className="text-[#1a0b5b] text-5xl font-bold font-['Josefin Sans']">
//     Trending Products
//   </div>

//    {/* Product Cards Container */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full px-4">
//           {/* Product Cards */}
//            {["1", "2", "3", "4"].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
//             >
//               <div className="w-full h-60 bg-[#f6f7fb]"></div>
//               <Image
//                 className="mt-[-50px]"
//                 src={`/post-3/${item}.svg`}
//                 alt="Cantilever Chair"
//                 width={150}
//                 height={150}
//               />
//               <div className="text-center mt-4">
//                 <p className="text-[#fb2e86] text-lg font-bold font-['Lato']">
//                   Cantilever chair
//                 </p>
//                 <p className="text-[#151875] text-sm font-normal font-['Lato']">
//                   $26.00
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
 
//   <div className="flex flex-wrap justify-center gap-4 m-4">
//   {/* Card 1 */}
//   <div className="w-full sm:w-96 h-64 bg-[#fff6fb] shadow flex items-center justify-between px-4 p-8">
//     <div className="text-[#151875] text-2xl font-semibold font-['Josefin Sans']">
//       23% off in all products
//     </div>
//     <Image className="w-52 h-52" src="/post-3/5.svg" alt="Product Image" width={400}height={400} />
//   </div>

//   {/* Card 2 */}
//   <div className="w-full sm:w-96 h-64 bg-[#fff6fb] shadow flex items-center justify-between px-4 p-8">
//     <div className="text-[#151875] text-2xl font-semibold font-['Josefin Sans']">
//       23% off in all products
//     </div>
//     <Image className="w-52 h-52" src="/post-3/6.svg" alt="Product Image" width={400}height={400} />
//   </div>
//   <div className="flex flex-col items-center space-y-4">
//   {/* Card 1 */}
//   <div className="w-64 h-20 relative flex flex-col justify-between">
//     <div className="w-64 h-20 left-0 top-0 absolute">
//       <div className="w-28 h-20 left-0 top-0 absolute bg-[#f5f6f8]" />
//       <div className="w-36 h-8 left-[116px] top-[21px] absolute">
//         <div className="left-0 top-0 absolute text-center text-[#151875] text-base font-semibold font-['Josefin Sans']">
//           Executive Seat chair
//         </div>
//         <div className="left-0 top-[21px] absolute text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
//           $32.00
//         </div>
//       </div>
//     </div>
//     <Image className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/7.svg" alt='post-3' width={400}height={400}/>
//   </div>

//   {/* Card 2 */}
//   <div className="w-64 h-20 relative flex flex-col justify-between">
//     <div className="w-64 h-20 left-0 top-0 absolute">
//       <div className="w-28 h-20 left-0 top-0 absolute bg-[#f5f6f8]" />
//       <div className="w-36 h-8 left-[116px] top-[21px] absolute">
//         <div className="left-0 top-0 absolute text-center text-[#151875] text-base font-semibold font-['Josefin Sans']">
//           Executive Seat chair
//         </div>
//         <div className="left-0 top-[21px] absolute text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
//           $32.00
//         </div>
//       </div>
//     </div>
//     <Image className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/8.svg" alt='post8' width={400}height={400} />
//   </div>

//   {/* Card 3 */}
//   <div className="w-64 h-20 relative flex flex-col justify-between">
//     <div className="w-64 h-20 left-0 top-0 absolute">
//       <div className="w-28 h-20 left-0 top-0 absolute bg-[#f5f6f8]" />
//       <div className="w-36 h-8 left-[116px] top-[21px] absolute">
//         <div className="left-0 top-0 absolute text-center text-[#151875] text-base font-semibold font-['Josefin Sans']">
//           Executive Seat chair
//         </div>
//         <div className="left-0 top-[21px] absolute text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
//           $32.00
//         </div>
//       </div>
//     </div>
//     <Image className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/9.svg" alt='post-9' width={400}height={400} />
//   </div>
// </div>



// <div className="w-full flex justify-center items-center">
//   <div className="text-left text-[#151875] text-3xl sm:text-4xl md:text-5xl font-bold font-['Josefin Sans']">
//     Discount Item
//   </div>
// </div>

// <div className="w-full flex justify-between items-center relative mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8 lg:px-16 flex-wrap">
//   <div className="w-full sm:w-96 lg:w-[45%] relative mb-8 sm:mb-0">
//     {/* Discount Title */}
//     <div className="text-[#151875] text-2xl sm:text-3xl md:text-4xl font-bold font-['Josefin Sans'] leading-10 tracking-wide mb-4">
//       20% Discount Of All Products
//     </div>

//     {/* Product Name */}
//     <div className="text-[#fb2e86] text-sm sm:text-xl font-normal font-['Josefin Sans'] leading-7 tracking-tight mb-4">
//       Eams Sofa Compact
//     </div>

//     {/* Shop Now Button */}
//     <div className="w-48 h-14 bg-[#fb2e86] rounded-sm mb-8">
//       <button className="w-28 mx-auto flex justify-center text-white text-base font-normal font-['Josefin Sans'] tracking-tight text-center pt-3">
//         Shop Now
//       </button>
//     </div>

//     {/* Description */}
//     <div className="w-96 h-12 text-[#b7bacb] text-sm sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-4">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
//     </div>

//     {/* Features */}
//     <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-2">
//       Material expose like metals
//     </div>
//     <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-2">
//       Simple neutral colours.
//     </div>
//     <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-2">
//       Material expose like metals
//     </div>
//     <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight">
//       Clear lines and geometric figures
//     </div>
//   </div>

//   {/* Image Section inside Circle */}
//   <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-[#fcecf1] rounded-full flex justify-center items-center mb-8 sm:mb-0">
//     <Image
//       className="w-full h-full object-cover rounded-full"
//       src="/post-3/10.svg"
//       alt="Product"
//       width={400}
//       height={400}
//     />
//   </div>
// </div>
// </div>
// <div className="text-[#151875] text-5xl p-8 font-bold font-['Josefin Sans']">Top Categories</div>

// <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//   <Image src="/post-3/11.png" alt="aa" width={400}height={400} />
//   <Image src="/post-3/12.png" alt="aa" width={400}height={400}/>
//   <Image src="/post-3/13.png" alt="aa" width={400}height={400}/>
//   <Image src="/post-3/14.png" alt="aa" width={400}height={400}/>
// </div>
// <Image className="cursor-pointer w-full h-full" src="post-3/15.svg" alt='post-15' width={400}height={400} />

// <Image className="py-6" src="post-3/16.svg" alt='post-16' width={904}height={93}/>

//      {/* Leatest Blog */}

// <div className="text-[#151875] text-5xl p-8 font-bold font-['Josefin Sans']">Leatest Blog</div>




// <div className="flex flex-wrap justify-center space-x-6 space-y-6">
// <Image src={"/post-3/Leatest-1.svg"} alt='product-1' width={384} height={384}/>
// <Image src={"/post-3/Leatest-2.svg"} alt='product-1' width={384} height={384}/>
// <Image src={"/post-3/Leatest-3.svg"} alt='product-1' width={384} height={384}/>

// </div>
// </div>
// </div>


//   )
// }

// export default Trending










import Image from 'next/image'
import React from 'react'

const Trending = () => {
  // Temporary array for demo
  const products = Array(4).fill(null)
  const categories = [11,12,13,14]
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Trending Products */}
      <section className="mb-16">
        <h1 className="text-center text-3xl md:text-5xl font-josefin font-bold text-[#1a0b5b] mb-8">
          Trending Products
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((_,i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-60 bg-[#f6f7fb]">
                <Image 
                  src={`/post-3/${i+1}.svg`} 
                  alt={`Product ${i+1}`}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[#fb2e86] font-bold text-lg">Cantilever Chair</h3>
                <p className="text-[#151875] font-semibold mt-2">$26.00</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Banners */}
      <section className="mb-16 grid md:grid-cols-2 gap-6">
        {[5,6].map((n) => (
          <div key={n} className="bg-[#fff6fb] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between h-64">
            <h3 className="text-xl sm:text-2xl text-[#151875] font-semibold mb-4 sm:mb-0 sm:mr-6 text-center sm:text-left">
              23% off in all products
            </h3>
            <div className="relative w-52 h-52">
              <Image 
                src={`/post-3/${n}.svg`} 
                alt="Discount Product"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Small Products */}
      <section className="mb-16 grid sm:grid-cols-3 gap-4">
        {[7,8,9].map((n) => (
          <div key={n} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-[#f5f6f8] w-20 h-20 p-2 rounded-lg mr-4">
                <Image
                  src={`/post-3/${n}.svg`}
                  alt="Small Product"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#151875] font-semibold">Executive Seat Chair</h4>
                <p className="text-[#151875] text-sm line-through">$32.00</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Discount Section */}
      <section className="mb-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl text-[#151875] font-bold mb-4">
            20% Discount Of All Products
          </h2>
          <p className="text-[#fb2e86] text-lg mb-6">Eams Sofa Compact</p>
          <p className="text-[#b7bacb] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-[#fb2e86] text-white px-8 py-3 rounded-sm hover:bg-[#d1266f]">
            Shop Now
          </button>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-[#fcecf1] rounded-full overflow-hidden">
            <Image
              src="/post-3/10.svg"
              alt="Discounted Product"
              width={400}
              height={400}
              className="object-contain w-full h-full p-8"
            />
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="mb-16">
        <h2 className="text-center text-3xl md:text-5xl font-josefin font-bold text-[#151875] mb-8">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((n) => (
            <div key={n} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={`/post-3/${n}.png`}
                alt={`Category ${n}`}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Full Width Banner */}
      <div className="mb-16 relative h-64 sm:h-96 rounded-xl overflow-hidden">
        <Image
          src="/post-3/15.svg"
          alt="Special Offer Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Brands Section */}
      <div className="mb-16 relative h-20">
        <Image
          src="/post-3/16.svg"
          alt="Trusted Brands"
          fill
          className="object-contain"
        />
      </div>

      {/* Latest Blog */}
      <section>
        <h2 className="text-center text-3xl md:text-5xl font-josefin font-bold text-[#151875] mb-8">
          Latest Blog
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Leatest-1','Leatest-2','Leatest-3'].map((name) => (
            <div key={name} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={`/post-3/${name}.svg`}
                alt="Blog Post"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Trending