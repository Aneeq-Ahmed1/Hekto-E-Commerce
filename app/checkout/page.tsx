"use client"; // Ensure this file is treated as a client-side component

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";  // Use Next.js Image component for optimized image loading
import { useCart } from "../context/CartContext";  // Import the useCart hook from your context
import { Product } from "../../sanity/lib/types";  // Assuming Product type is available

// Define the Order type
type Order = {
  _type: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
  cart: Product[];  // Assuming 'Product' is the type for items in the cart
  totalPrice: string;
  paymentStatus: string;
  orderStatus: string;
  orderDate: string;
};

const CheckoutPage = () => {
  const { cart } = useCart(); // Get cart data from the context

  // Initialize client-side rendering state to prevent hydration errors
  const [clientSide, setClientSide] = useState(false);

  // State to track the order submission status
  const [orderStatus, setOrderStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // State to track the order details after submission
  const [, setOrderDetails] = useState<Order | null>(null);

  // Refs for form fields
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cardNumberRef = useRef<HTMLInputElement>(null);
  const expiryDateRef = useRef<HTMLInputElement>(null);
  const cvvRef = useRef<HTMLInputElement>(null);

  // Hydration fix: only run logic after the component has mounted
  useEffect(() => {
    setClientSide(true); // This ensures client-side only logic runs after the initial render
  }, []);

  // If the component hasn't mounted yet (client-side only), return loading state to prevent mismatches
  if (!clientSide) {
    return <div>Loading...</div>;
  }

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  // Ensure totalPrice is a number before using toFixed()
  const formattedTotalPrice = Number(totalPrice).toFixed(2);

  // If cart is empty, show a message
  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-lg text-gray-600">Start shopping to fill your cart!</p>
      </div>
    );
  }

  // Handle order submission
  const handlePlaceOrder = async () => {
    // Check if all required fields are filled out using refs
    if (
      !firstNameRef.current?.value ||
      !lastNameRef.current?.value ||
      !addressRef.current?.value ||
      !cityRef.current?.value ||
      !zipRef.current?.value ||
      !phoneRef.current?.value ||
      !emailRef.current?.value ||
      !cardNumberRef.current?.value ||
      !expiryDateRef.current?.value ||
      !cvvRef.current?.value
    ) {
      setOrderStatus("error"); // Show error if fields are missing
      return;
    }

    setOrderStatus("loading"); // Set loading state

    try {
      // Here, you would typically make an API call to process the order
      const newOrder: Order = {
        _type: 'order',
        firstName: firstNameRef.current?.value || '',
        lastName: lastNameRef.current?.value || '',
        address: addressRef.current?.value || '',
        city: cityRef.current?.value || '',
        zip: zipRef.current?.value || '',
        phone: phoneRef.current?.value || '',
        email: emailRef.current?.value || '',
        cart: cart,  // Add cart items to the order
        totalPrice: formattedTotalPrice,
        paymentStatus: "pending",
        orderStatus: "pending",
        orderDate: new Date().toISOString(),
      };

      // Simulating saving the order and showing confirmation
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

      setOrderDetails(newOrder);  // Store order details in state
      setOrderStatus("success"); // On success
    } catch (error) {
      console.error(error);
      setOrderStatus("error"); // On error
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Order Summary - Items */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-4 text-gray-700">
            {cart.map((item: Product) => (
              <div key={item._id} className="flex justify-between items-center">
                {/* Displaying the product image */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.imageUrl || "/default-image.jpg"}  // Use imageUrl from the cart item, with a fallback image
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-cover rounded-lg"
                  />
                  <p>{item.name} (x{item.quantity || 1})</p>
                </div>

                <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary - Total */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h3>
          <div className="space-y-4 text-gray-700">
            <p>Total items: <span className="font-semibold">{cart.length}</span></p>
            <p>Total Price: <span className="font-semibold">${formattedTotalPrice}</span></p>
          </div>
        </div>
      </div>

      {/* Billing Information */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Billing Information</h3>
        <form>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700">First Name</label>
              <input
                ref={firstNameRef}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
              <input
                ref={lastNameRef}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="address" className="block text-gray-700">Address</label>
            <input
              ref={addressRef}
              id="address"
              name="address"
              type="text"
              placeholder="123 Main St"
              className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label htmlFor="city" className="block text-gray-700">City</label>
              <input
                ref={cityRef}
                id="city"
                name="city"
                type="text"
                placeholder="Enter your city"
                className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-gray-700">Zip Code</label>
              <input
                ref={zipRef}
                id="zip"
                name="zip"
                type="text"
                placeholder="Enter your zip code"
                className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              ref={phoneRef}
              id="phone"
              name="phone"
              type="text"
              placeholder="123-456-7890"
              className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          {/* Payment Information */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800">Payment Information</h4>
            <div className="mt-4">
              <label htmlFor="cardType" className="block text-gray-700">Card Type</label>
              <select
                id="cardType"
                name="cardType"
                className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
              >
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">American Express</option>
                {/* Add more card types as needed */}
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
              <input
                ref={cardNumberRef}
                id="cardNumber"
                name="cardNumber"
                type="text"
                placeholder="1234 5678 9876 5432"
                className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date</label>
                <input
                  ref={expiryDateRef}
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700">CVV</label>
                <input
                  ref={cvvRef}
                  id="cvv"
                  name="cvv"
                  type="text"
                  placeholder="123"
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Place Order Button */}
      <div className="mt-6">
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-[#fb2e86] text-white py-3 rounded-md hover:bg-pink-600 transition"
        >
          {orderStatus === "loading" ? "Placing Order..." : "Place Order"}
        </button>
      </div>

      {/* Display Order Status */}
      {orderStatus === "success" && (
        <div className="mt-4 text-green-600 font-semibold">Your order has been placed successfully!</div>
      )}
      {orderStatus === "error" && (
        <div className="mt-4 text-red-600 font-semibold">Please fill out all fields before placing your order.</div>
      )}
    </div>
  );
};

export default CheckoutPage;

