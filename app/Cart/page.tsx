"use client"; // Ensure this file is treated as a client-side component

// import React, { useState, useEffect } from "react";
// import { Product } from "../../sanity/lib/types"; // Assuming Product type is available
// import Link from "next/link"
// import Image from "next/image";


// const CartPage = () => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // On component mount, load cart from localStorage or another source
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Function to handle item removal
//   const handleRemoveFromCart = (productId: string) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);

//     // Optionally, update localStorage after removing an item
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // If the cart is empty, show a message
//   if (cart.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
//         <p className="text-lg text-gray-600">Start shopping to fill your cart!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-4xl font-semibold text-gray-800 mb-6">Your Cart</h1>

//       {/* Cart Items */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {cart.map((product) => (
//           <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
//             <Image
//               width={50}
//               height={50}
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-32 h-32 object-cover rounded-lg"
//             />
//             <div className="flex-grow">
//               <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
//               <p className="text-sm text-gray-500 mb-2">{product.description}</p>
//               <div className="text-lg font-bold text-gray-900 mb-4">Price: ${product.price}</div>
//               <button
//                 onClick={() => handleRemoveFromCart(product._id)}
//                 className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart Summary */}
//       <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h3>
//         <div className="space-y-4 text-gray-700">
//           <p>Total items: <span className="font-semibold">{cart.length}</span></p>
//           <p>Total Price: 
//   <span className="font-semibold">
//     ${cart.reduce((total, item) => total + parseFloat(item.price as any), 0).toFixed(2)}
//   </span>
// </p>
//         </div>
//         <button className="w-full bg-green-600 text-white py-3 mt-6 rounded-md hover:bg-green-700 transition">
//           <Link href= "/checkout">
//           Proceed to Checkout
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;















import React, { useState, useEffect } from "react";
import { Product } from "../../sanity/lib/types"; // Assuming Product type is available
import Link from "next/link"
import Image from "next/image";

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
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-lg text-gray-600">Start shopping to fill your cart!</p>
      </div>
    );
  }

  // Calculate total price, ensuring price is treated as a number
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.toString()), 0).toFixed(2);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="grid md:grid-cols-3 gap-6">
        {cart.map((product) => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
            <Image
              width={50}
              height={50}
              src={product.imageUrl}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>
              <div className="text-lg font-bold text-gray-900 mb-4">Price: ${product.price}</div>
              <button
                onClick={() => handleRemoveFromCart(product._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h3>
        <div className="space-y-4 text-gray-700">
          <p>Total items: <span className="font-semibold">{cart.length}</span></p>
          <p>Total Price: <span className="font-semibold">${totalPrice}</span></p>
        </div>
        <Link href="/checkout">
          <button className="w-full bg-green-600 text-white py-3 mt-6 rounded-md hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;















