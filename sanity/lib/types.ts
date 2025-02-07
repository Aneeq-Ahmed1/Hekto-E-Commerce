// sanity/lib/types.ts
// export type Product = {
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string;
//     discountPercentage?: number;
//     priceWithDiscount?: number;
//     rating?: number;
//     ratingCount?: number;
//     tags?: string[];
//     sizes?: string[];
//   };
  


export type Product = {
    quantity: number;
    productName: string;
    image(image: any): unknown;
    inventory: number;
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    discountPercentage?: number;  // Make this optional
    priceWithDiscount?: number;
    rating?: number;
    ratingCount?: number;
    tags?: string[];
    sizes?: string[];
  };
  