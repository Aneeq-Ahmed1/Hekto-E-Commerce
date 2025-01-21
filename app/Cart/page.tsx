
// // ./src/app/CartPage/page.tsx

// import Image from "next/image";

// export default function CartPage() {
//   // Array of products with individual images and details
//   const products = [
//     {
//       id: 1,
//       name: "Brown Leather Bag",
//       image: "/cart/1.svg", // Leading slash added
//       color: "Brown",
//       size: "XL",
//       price: 32.0,
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: "Black Handbag",
//       image: "/cart/2.svg", // Leading slash added
//       color: "Black",
//       size: "M",
//       price: 45.0,
//       quantity: 2,
//     },
//     {
//       id: 3,
//       name: "Red Crossbody Bag",
//       image: "/cart/3.svg", // Leading slash added
//       color: "Red",
//       size: "L",
//       price: 25.0,
//       quantity: 1,
//     },
//     {
//       id: 4,
//       name: "Gray Tote Bag",
//       image: "/cart/4.svg", // Leading slash added
//       color: "Gray",
//       size: "XL",
//       price: 38.0,
//       quantity: 3,
//     },
//     {
//       id: 5,
//       name: "Pink Mini Bag",
//       image: "/cart/5.svg", // Leading slash added
//       color: "Pink",
//       size: "S",
//       price: 29.0,
//       quantity: 1,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-6">
//       {/* Header Section */}
//       <div className="w-full bg-gray-100 py-6">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-3xl font-bold text-indigo-900">Shopping Cart</h1>
//           <p className="text-sm text-gray-600">
//             Home . Pages . <span className="text-pink-500">Shopping Cart</span>
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Product Table */}
//         <div className="lg:col-span-2">
//           {/* Make the table horizontally scrollable on small screens */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse border border-gray-200 bg-white rounded-lg">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border border-gray-200 p-4 text-left text-indigo-900 font-semibold text-sm md:text-base">
//                     Product
//                   </th>
//                   <th className="border border-gray-200 p-4 text-indigo-900 font-semibold text-sm md:text-base">
//                     Price
//                   </th>
//                   <th className="border border-gray-200 p-4 text-indigo-900 font-semibold text-sm md:text-base">
//                     Quantity
//                   </th>
//                   <th className="border border-gray-200 p-4 text-indigo-900 font-semibold text-sm md:text-base">
//                     Total
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <tr key={product.id}>
//                     <td className="border border-gray-200 p-4 flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           height={87}
//                           width={83}
//                           className="w-12 h-12 rounded object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-gray-800 md:text-base">
//                           {product.name}
//                         </p>
//                         <p className="text-xs text-gray-500 md:text-sm">Color: {product.color}</p>
//                         <p className="text-xs text-gray-500 md:text-sm">Size: {product.size}</p>
//                       </div>
//                     </td>
//                     <td className="border border-gray-200 p-4 text-gray-800 text-sm md:text-base">
//                       ${product.price.toFixed(2)}
//                     </td>
//                     <td className="border border-gray-200 p-4 text-gray-800">
//                       <input
//                         type="number"
//                         className="w-16 border rounded-md p-1 text-sm focus:outline-none focus:ring-pink-500"
//                         defaultValue={product.quantity}
//                         min="1"
//                       />
//                     </td>
//                     <td className="border border-gray-200 p-4 text-gray-800 text-sm md:text-base">
//                       ${(product.price * product.quantity).toFixed(2)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {/* Action Buttons */}
//           <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
//             <button className="px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition duration-200">
//               Update Cart
//             </button>
//             <button className="px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition duration-200">
//               Clear Cart
//             </button>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-8">
//           {/* Cart Totals */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-lg font-semibold text-gray-800">Cart Totals</h2>
//             <div className="mt-4">
//               <p className="flex justify-between text-gray-600">
//                 <span>Subtotals:</span>
//                 <span>£219.00</span>
//               </p>
//               <p className="flex justify-between text-gray-800 font-bold mt-2">
//                 <span>Totals:</span>
//                 <span>£325.00</span>
//               </p>
//               <p className="text-sm text-gray-500 mt-2">
//                 Shipping &amp; taxes calculated at checkout
//               </p>
//               <button className="mt-4 w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition duration-200">
//                 Proceed To Checkout
//               </button>
//             </div>
//           </div>

//           {/* Calculate Shipping */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Calculate Shipping
//             </h2>
//             <form className="mt-4 space-y-4">
//               <input
//                 type="text"
//                 className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
//                 placeholder="Country"
//               />
//               <input
//                 type="text"
//                 className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
//                 placeholder="City/State"
//               />
//               <input
//                 type="text"
//                 className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
//                 placeholder="Postal Code"
//               />
//               <button className="w-full bg-pink-500 text-white font-medium py-2 rounded-md hover:bg-pink-600 transition duration-200">
//                 Calculate Shipping
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client"




// import { useCart } from "../context/CartContext"; // Import the useCart hook

// const CartPage = () => {
//   const { cart, removeFromCart } = useCart();  // Access cart and remove function

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>
//       <div className="space-y-6">
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cart.map((product) => (
//             <div key={product._id} className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-xl">{product.name}</h2>
//                 <p>${product.price}</p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(product._id)}  // Remove product from cart
//                 className="bg-red-500 text-white py-1 px-4 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;









"use client"
// import { useCart } from "../context/CartContext"; // Import the useCart hook

// const CartPage = () => {
//   const { cart, removeFromCart } = useCart();  // Access cart and remove function

//   console.log("Cart in CartPage: ", cart);  // Debug log to verify cart state

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>
//       <div className="space-y-6">
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cart.map((product) => (
//             <div key={product._id} className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-xl">{product.name}</h2>
//                 <p>${product.price}</p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(product._id)}  // Remove product from cart
//                 className="bg-red-500 text-white py-1 px-4 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;

"use client";
"use client"; // Ensure this file is treated as a client-side component

import React, { useState, useEffect } from "react";
import { Product } from "../../sanity/lib/types"; // Assuming Product type is available

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // On component mount, load cart from localStorage or another source
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Function to handle item removal
  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);

    // Optionally, update localStorage after removing an item
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // If the cart is empty, show a message
  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((product) => (
        <div key={product._id} className="cart-item">
          <div>
            <img src={product.imageUrl} alt={product.name} width={100} height={100} />
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleRemoveFromCart(product._id)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
