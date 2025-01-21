// import { sanityFetch } from "../../../sanity/lib/fetch";
// import { useRouter } from "next/router";
// import Image from "next/image";

// import { sanityFetch } from "../../../sanity/lib/fetch";

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: { asset: { url: string } };
//   discountPercentage?: number;
//   stockLevel?: number;
//   category?: string;
// };

// export async function getServerSideProps({ params }: { params: { id: string } }) {
//   const query = `*[_type == "product" && _id == "${params.id}"] {
//     _id,
//     name,
//     description,
//     price,
//     image { asset -> { url } },
//     discountPercentage,
//     stockLevel,
//     category
//   }`;

//   const productData = await sanityFetch({ query });

//   if (!productData || productData.length === 0) {
//     return { notFound: true }; // 404 if product not found
//   }

//   return {
//     props: {
//       product: productData[0],
//     },
//   };
// }

// type ProductDetailPageProps = {
//   product: Product;
// };

// const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
//   const router = useRouter();

//   // Handle adding to cart (simple example, you can extend this with your cart state)
//   const addToCart = () => {
//     // In this case, let's assume we just log it to the console for now
//     console.log("Adding to cart: ", product);
//     // You could update a global state or localStorage here.
//   };

//   return (
//     <div className="p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex gap-8">
//           <div className="flex-none w-96 h-96 relative">
//             <Image
//               src={product.image?.asset?.url || "/default-image.jpg"}
//               alt={product.name}
//               width={400}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div className="flex-grow">
//             <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>
//             <p className="mt-2 text-gray-600">{product.description}</p>

//             <div className="mt-4 text-xl font-semibold text-gray-900">
//               ${product.price}
//               {product.discountPercentage && (
//                 <span className="ml-2 text-red-500 line-through">
//                   ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4">
//               <button
//                 onClick={addToCart}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;







// import { sanityFetch } from "../../../sanity/lib/fetch";
// import { singleProduct } from "../../../sanity/lib/queries"; // Single product query
// import Image from "next/image";

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   discountPercentage?: number;
//   priceWithDiscount?: number;
//   rating?: number;
//   ratingCount?: number;
//   tags?: string[];
//   sizes?: string[];
// };

// type ProductDetailPageProps = {
//   params: { id: string };
// };

// const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
//   const { id } = params;

//   if (!id) {
//     return <div>Product ID is missing!</div>;
//   }

//   const query = singleProduct;

//   // Fetch product data by ID
//   const productData = await sanityFetch({
//     query,
//     params: { id },
//   });

//   if (!productData || productData.length === 0) {
//     return <div>Product not found!</div>;
//   }

//   const product: Product = productData[0]; // The first product in the array

//   return (
//     <div className="p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex gap-8">
//           <div className="flex-none w-96 h-96 relative">
//             <Image
//               src={product.imageUrl || "/default-image.jpg"}
//               alt={product.name}
//               width={400}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div className="flex-grow">
//             <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>
//             <p className="mt-2 text-gray-600">{product.description}</p>

//             <div className="mt-4 text-xl font-semibold text-gray-900">
//               ${product.price}
//               {product.discountPercentage && (
//                 <span className="ml-2 text-red-500 line-through">
//                   ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4">
//               <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;












// "use client"

// import { sanityFetch } from "../../../sanity/lib/fetch";
// import { singleProduct } from "../../../sanity/lib/queries"; // Single product query
// import Image from "next/image";
// import { useCart } from "../../context/CartContext";  // Importing useCart hook
// import { Product } from "../../../sanity/lib/types"; // Importing the Product type

// type ProductDetailPageProps = {
//   params: { id: string };
// };

// const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
//   const { id } = params;

//   if (!id) {
//     return <div>Product ID is missing!</div>;
//   }

//   const query = singleProduct;

//   // Fetch product data by ID
//   const productData = await sanityFetch({
//     query,
//     params: { id },
//   });

//   if (!productData || productData.length === 0) {
//     return <div>Product not found!</div>;
//   }

//   const product: Product = productData[0]; // The first product in the array

//   // Access cart context
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     addToCart(product);  // Add product to cart
//     alert(`${product.name} has been added to the cart!`);
//   };

//   return (
//     <div className="p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex gap-8">
//           <div className="flex-none w-96 h-96 relative">
//             <Image
//               src={product.imageUrl || "/default-image.jpg"}
//               alt={product.name}
//               width={400}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div className="flex-grow">
//             <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>
//             <p className="mt-2 text-gray-600">{product.description}</p>

//             <div className="mt-4 text-xl font-semibold text-gray-900">
//               ${product.price}
//               {product.discountPercentage && (
//                 <span className="ml-2 text-red-500 line-through">
//                   ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4">
//               <button
//                 onClick={handleAddToCart}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;









"use client";  // Make sure this is for client-side rendering

// import { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext"; // Importing useCart hook
// import { Product } from "../../../sanity/lib/types"; // Importing the Product type
// import { sanityFetch } from "../../../sanity/lib/fetch"; // Fetch function
// import { singleProduct } from "../../../sanity/lib/queries"; // Single product query
// import Image from "next/image"; // Image component from Next.js

// type ProductDetailPageProps = {
//   params: { id: string };
// };

// const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
//   const { id } = params;

//   const [product, setProduct] = useState<Product | null>(null); // State for product data
//   const { addToCart } = useCart(); // Access cart context

//   useEffect(() => {
//     // Fetch product data when component mounts
//     const fetchProductData = async () => {
//       if (id) {
//         try {
//           const productData = await sanityFetch({
//             query: singleProduct,
//             params: { id },
//           });

//           if (productData && productData.length > 0) {
//             setProduct(productData[0]); // Set fetched product data to state
//           } else {
//             console.error("Product not found!");
//           }
//         } catch (error) {
//           console.error("Error fetching product data:", error);
//         }
//       }
//     };

//     fetchProductData();
//   }, [id]); // Run this effect when `id` changes

//   if (!product) {
//     return <div>Loading...</div>; // Show loading message while fetching data
//   }

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart(product);  // Add product to cart
//       alert(`${product.name} has been added to the cart!`);
//     }
//   };

//   return (
//     <div className="p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex gap-8">
//           <div className="flex-none w-96 h-96 relative">
//             <Image
//               src={product.imageUrl || "/default-image.jpg"}
//               alt={product.name}
//               width={400}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div className="flex-grow">
//             <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>
//             <p className="mt-2 text-gray-600">{product.description}</p>

//             <div className="mt-4 text-xl font-semibold text-gray-900">
//               ${product.price}
//               {product.discountPercentage && (
//                 <span className="ml-2 text-red-500 line-through">
//                   ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4">
//               <button
//                 onClick={handleAddToCart}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;









"use client"; // Mark as a client-side component

import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";  // Import the useCart hook from your context
import { sanityFetch } from "../../../sanity/lib/fetch";  // Import your fetch function
import { singleProduct } from "../../../sanity/lib/queries";  // Import single product query
import { Product } from "../../../sanity/lib/types";  // Import the Product type

type ProductDetailPageProps = {
  params: { id: string };
};

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const [product, setProduct] = useState<Product | null>(null);  // Initialize product state
  const { addToCart } = useCart();  // Access addToCart function from context

  // Fetch the product data based on the ID passed in params
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await sanityFetch({
          query: singleProduct,
          params: { id: params.id },
        });
        console.log("Fetched product data:", productData); // Log to check data
        if (productData && productData.length > 0) {
          setProduct(productData[0]);  // Set the fetched product to state
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();  // Call fetch function when the component mounts
  }, [params.id]);  // Re-fetch the product when the ID changes

  // Show loading state while fetching the product
  if (!product) return <div>Loading...</div>;

  // Handle image fallback if no image URL is available
  const imageUrl = product.imageUrl || "/default-image.jpg";  // Default image if none provided

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product);  // Add the product to the cart
    alert(`${product.name} has been added to the cart!`);  // Alert the user
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-8">
          {/* Product Image */}
          <div className="flex-none w-96 h-96 relative">
            <img
              src={imageUrl}  // Use imageUrl from the fetched data
              alt={product.name}
              className="object-cover rounded-lg"
              width={400}
              height={400}
            />
          </div>

          {/* Product Details */}
          <div className="flex-grow">
            <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>

            {/* Product Price */}
            <div className="mt-4 text-xl font-semibold text-gray-900">
              ${product.price}
              {product.discountPercentage && (
                <span className="ml-2 text-red-500 line-through">
                  ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4">
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
