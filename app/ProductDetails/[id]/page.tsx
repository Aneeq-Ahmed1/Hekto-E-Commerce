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







import { sanityFetch } from "../../../sanity/lib/fetch";
import { singleProduct } from "../../../sanity/lib/queries"; // Single product query
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  discountPercentage?: number;
  priceWithDiscount?: number;
  rating?: number;
  ratingCount?: number;
  tags?: string[];
  sizes?: string[];
};

type ProductDetailPageProps = {
  params: { id: string };
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { id } = params;

  if (!id) {
    return <div>Product ID is missing!</div>;
  }

  const query = singleProduct;

  // Fetch product data by ID
  const productData = await sanityFetch({
    query,
    params: { id },
  });

  if (!productData || productData.length === 0) {
    return <div>Product not found!</div>;
  }

  const product: Product = productData[0]; // The first product in the array

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-8">
          <div className="flex-none w-96 h-96 relative">
            <Image
              src={product.imageUrl || "/default-image.jpg"}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex-grow">
            <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>

            <div className="mt-4 text-xl font-semibold text-gray-900">
              ${product.price}
              {product.discountPercentage && (
                <span className="ml-2 text-red-500 line-through">
                  ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
                </span>
              )}
            </div>

            <div className="mt-4">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
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

















// // pages/ProductDetails/[id].tsx

// import { sanityFetch } from "../../../sanity/lib/fetch";
// import { singleProduct } from "../../../sanity/lib/queries"; // Single product query
// import Image from "next/image";
// import { useCart } from "../../context/CartContext"
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

//   const { addToCart } = useCart(); // Get the addToCart function from context

//   const handleAddToCart = () => {
//     const cartProduct = {
//       id: product._id,
//       name: product.name,
//       price: product.price,
//       imageUrl: product.imageUrl,
//       quantity: 1,
//     };

//     addToCart(cartProduct); // Add product to cart
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
//                 onClick={handleAddToCart} // Add product to cart when clicked
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





