// import Image from 'next/image';

// export default function ProductDetails() {
//   return (
//     <div>
//   <div className="bg-[#F2F0FF]  py-10 mb-6 ">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-indigo-900 mb-2">Product Details</h1>
//           <p className="text-sm text-gray-600">
//             Home . Pages . <span className="text-pink-500">Product Details</span>
//           </p>
//         </div>
//       </div>
    
//     <div className="container mx-auto px-4 py-8">
//       {/* Breadcrumb */}
//       {/* <div className="text-sm text-gray-500 mb-4">
//         <span>Home</span> &gt; <span>Pages</span> &gt; <span>Product Details</span>
//       </div> */}
//        {/* <div className="bg-indigo-50 py-10 mb-6 ">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-indigo-900 mb-2">Product Details</h1>
//           <p className="text-sm text-gray-600">
//             Home . Pages . <span className="text-pink-500">Product Details</span>
//           </p>
//         </div>
//       </div> */}

//       {/* Product Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Images */}
//         <div className="grid grid-cols-2 gap-4">
//           <Image
//             src="/productDetails/4.svg"
//             alt="Main Product"
//             width={375}
//             height={487}
//             className="rounded-lg"
//           />
//           <div className="grid grid-cols-1 gap-2">
//             <Image
//               src="/productDetails/1.svg"
//               alt="Thumbnail 1"
//               width={151}
//               height={155}
//               className="rounded-lg"
//             />
//             <Image
//               src="/productDetails/2.svg"
//               alt="Thumbnail 2"
//               width={151}
//               height={155}
//               className="rounded-lg"
//             />
//             <Image
//               src="/productDetails/3.svg"
//               alt="Thumbnail 3"
//               width={151}
//               height={155}
//               className="rounded-lg"
//             />
          
//           </div>
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-2xl font-semibold">Playwood Arm Chair</h1>
//           <div className="text-gray-500 mt-2">
//             <span className="line-through">$200</span>{' '}
//             <span className="text-red-500">$150</span>
//           </div>
//           <p className="text-gray-600 mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
//             nihil pariatur quas id voluptatem.
//           </p>
//           <div className="mt-4">

//             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
//            <a href='/cart'>Add to Cart</a> 
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs Section */}
//       <div className="mt-12">
//         <div className="border-b flex space-x-8">
//           <button className="pb-2 border-b-2 border-blue-600">Description</button>
//           <button className="pb-2">Additional Info</button>
//           <button className="pb-2">Reviews</button>
//           <button className="pb-2">Video</button>
//         </div>
//         <div className="mt-4 text-gray-600">
//           <h2 className="text-lg font-semibold">Various Tempers</h2>
//           <p className="mt-2">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
//             debitis error iusto ex ducimus maiores.
//           </p>
//           <ul className="mt-4 space-y-2">
//             <li>✔ Lorem ipsum dolor sit amet consectetur.</li>
//             <li>✔ Ex ducimus maiores iusto ex facilis debitis.</li>
//             <li>✔ Facilis debitis error iusto ex ducimus.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h2 className="text-lg font-semibold mb-4">Related Products</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//           <div className="text-center">
//             <Image
//               src="/productDetails/5.svg"
//               alt="Related Product 1"
//               width={270}
//               height={340}
//               className="rounded-lg"
//             />
//             <h3 className="text-gray-800 mt-2">Mens Fashion</h3>
//             <p className="text-gray-500">$40</p>
//           </div>
//           <div className="text-center">
//             <Image
//               src="/productDetails/6.svg"
//               alt="Related Product 2"
//               width={270}
//               height={340}
//               className="rounded-lg"
//             />
//             <h3 className="text-gray-800 mt-2">Womens Fashion</h3>
//             <p className="text-gray-500">$30</p>
//           </div>
//           <div className="text-center">
//             <Image
//               src="/productDetails/7.svg"
//               alt="Related Product 3"
//               width={270}
//               height={340}
//               className="rounded-lg"
//             />
//             <h3 className="text-gray-800 mt-2">Kids Disney Fashion</h3>
//             <p className="text-gray-500">$50</p>
//           </div>
//           <div className="text-center">
//             <Image
//               src="/productDetails/8.svg"
//               alt="Related Product 4"
//               width={270}
//               height={340}
//               className="rounded-lg"
//             />
            
//             <h3 className="text-gray-800 mt-2">Top Wall Digital Clock</h3>
//             <p className="text-gray-500">$60</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center items-center ">
//     <Image className="py-6" src="post-3/16.svg" alt="post-16" width="904" height="93" />
// </div>

//     </div>
//     </div>
//   );
// }











// import { sanityFetch } from "../../sanity/lib/fetch";

// // import { allproducts } from "@/sanity/lib/queries";
// import Image from "next/image";

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// export default async function Home() {
//   // Fetch products, make sure the query limits to 20 products
//   const query = `*[_type == "product"][0...40] { 
//     _id,
//     name,
//     description,
//     price,
//     "imageUrl": image.asset->url
//   }`;

//   // Fetching products from Sanity
//   const products: Product[] = await sanityFetch({ query });

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-semibold text-center mb-8">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 flex flex-col items-center bg-white"
//             key={product._id}
//           >
//             <div className="relative flex flex-col justify-center items-center w-full h-60 mb-4">
//               <Image
//                 src={product.imageUrl || "/default-image.jpg"} // Fallback for missing images
//                 alt={product.name}
//                 className="object-cover rounded-lg"
//                 width={250}
//                 height={300}
                
//               />
//             </div>
//             <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
//               {product.name}
//             </h2>
//             <p className="text-center text-gray-600 mb-4">{product.description}</p>
//             <p className="text-lg font-semibold text-center text-gray-900">
//               ${Number(product.price).toFixed(2)} {/* Ensure price is a number */}
//             </p>
//             <button className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







import { sanityFetch } from "../../sanity/lib/fetch";
import { allproducts } from "../../sanity/lib/queries";  // Fetch all products query
import Link from "next/link";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const ProductListPage = async () => {
  const products = await sanityFetch({ query: allproducts });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <div
            className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 flex flex-col items-center bg-white"
            key={product._id}
          >
            <div className="relative flex flex-col justify-center items-center w-full h-60 mb-4">
              <Image
                src={product.imageUrl || "/default-image.jpg"}
                alt={product.name}
                className="object-cover rounded-lg"
                width={250}
                height={300}
              />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-2">{product.name}</h2>
            <p className="text-center text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-center text-gray-900">${product.price}</p>
            <Link
              href={`/ProductDetails/${product._id}`} // Link to single product page
              className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;








