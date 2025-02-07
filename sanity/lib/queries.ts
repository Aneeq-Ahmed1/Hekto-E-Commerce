// import { defineQuery } from "next-sanity";


// export const allproducts = defineQuery(`
//     *[_type == "product"][0..3]{
//     _id,
//     name,
//     description,
//     price,
//     discountPercentage,
//     priceWithDiscount,
//     rating,
//     ratingCount,
//     tags,
//     sizes,
//     "imageUrl": image.asset->url
//     }
//     `)

//     export const forproducts = defineQuery(`
//         *[_type == "product"][0..3]{
//         _id,
//         name,
//         description,
//         price,
//         discountPercentage,
//         priceWithDiscount,
//         rating,
//         ratingCount,
//         tags,
//         sizes,
//         "imageUrl": image.asset->url
//         }
//         `)
       
        




import { defineQuery } from "next-sanity";

// Query to get all products
export const allproducts = defineQuery(`
  *[_type == "product"][0..40]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url
  }
`);

// Query to get a single product by ID
export const singleProduct = defineQuery(`
  *[_type == "product" && _id == $id]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url
  }
`);







export const allOrders = defineQuery(`
  *[_type == "order"] {
    _id,
    firstName,
    lastName,
    email,
    status as orderStatus,
    total as totalAmount,
    orderDate,
    cartItems[]->{
      name,
      price,
    }
  }
`);
