// "use client"
// import React, { createContext, useState, useContext, ReactNode } from 'react';
// import { Product } from '../../sanity/lib/types';  // Ensure the correct path for Product type

// // Define the types for the cart context
// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
// }

// // Create the CartContext with a default value
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Create the CartProvider component that will wrap the app and provide the context
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // Function to add a product to the cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   // Function to remove a product from the cart
//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };





// "use client"
// // context/CartContext.tsx
// import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
// import { Product } from '../../sanity/lib/types';

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>(() => {
//     if (typeof window !== 'undefined') {
//       const savedCart = localStorage.getItem('cart');
//       return savedCart ? JSON.parse(savedCart) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
//     }
//   }, [cart]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };










// "use client";
// import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
// import { Product } from '../../sanity/lib/types';

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>(() => {
//     if (typeof window !== 'undefined') {
//       const savedCart = localStorage.getItem('cart');
//       return savedCart ? JSON.parse(savedCart) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
//     }
//   }, [cart]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       // Check if product is already in cart
//       const isProductInCart = prevCart.some(item => item._id === product._id);
//       if (isProductInCart) {
//         return prevCart; // Return the previous cart if product already exists
//       }
//       return [...prevCart, product]; // Add product if not already in cart
//     });
//   };

//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };















"use client";
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Product } from '../../sanity/lib/types';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      // If there's data in localStorage, parse and load it, otherwise initialize as empty
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // This effect will sync cart changes to localStorage every time the cart state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Save cart to localStorage when cart changes
      localStorage.setItem('cart', JSON.stringify(cart)); 
    }
  }, [cart]); // Dependency on cart, it runs every time the cart updates

  // Function to add product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some(item => item._id === product._id);
      if (isProductInCart) {
        // If product is already in the cart, don't add it again
        return prevCart; 
      }
      // Otherwise, add the new product to the cart
      return [...prevCart, product];
    });
  };

  // Function to remove product from the cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};



