

// export default {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//       {
//         name: 'customerName',
//         type: 'string',
//         title: 'Customer Name',
//         validation: (Rule: any) => Rule.required().error('Customer name is required'),
//       },
//       {
//         name: 'customerEmail',
//         type: 'string',
//         title: 'Customer Email',
//         validation: (Rule: any) => Rule.required().email().error('Valid email is required'),
//       },
//       {
//         name: 'shippingAddress',
//         type: 'text',
//         title: 'Shipping Address',
//         validation: (Rule: any) => Rule.required().error('Shipping address is required'),
//       },
//       {
//         name: 'orderedProducts',
//         type: 'array',
//         title: 'Ordered Products',
//         of: [
//           {
//             type: 'reference',
//             to: [{ type: 'product' }], // Reference to the Product schema
//           },
//         ],
//         validation: (Rule: any) => Rule.required().error('At least one product is required'),
//       },
//       {
//         name: 'orderStatus',
//         type: 'string',
//         title: 'Order Status',
//         options: {
//           list: [
//             { title: 'Pending', value: 'pending' },
//             { title: 'Completed', value: 'completed' },
//             { title: 'Cancelled', value: 'cancelled' },
//           ],
//           layout : 'radio'
//         },
//         initialValue : 'pending',
//         validation: (Rule: any) => Rule.required().error('Order status is required'),
//       },
//       {
//         name: 'totalAmount',
//         type: 'number',
//         title: 'Total Amount',
//         validation: (Rule: any) => Rule.required().min(0).error('Total amount is required'),
//       },
//       {
//         name: 'discountApplied',
//         type: 'number',
//         title: 'Discount Applied',
//         validation: (Rule: any) => Rule.min(0).max(100).warning('Discount should be between 0 and 100'),
//       },
//       {
//         name: 'paymentStatus',
//         type: 'string',
//         title: 'Payment Status',
//         options: {
//           list: [
//             { title: 'Pending', value: 'pending' },
//             { title: 'Paid', value: 'paid' },
//             { title: 'Failed', value: 'failed' },
//           ],
//         },
//         validation: (Rule: any) => Rule.required().error('Payment status is required'),
//       },
//       {
//         name: 'orderDate',
//         type: 'datetime',
//         title: 'Order Date',
//         validation: (Rule: any) => Rule.required().error('Order date is required'),
//       },
//       {
//         name: 'estimatedDeliveryDate',
//         type: 'datetime',
//         title: 'Estimated Delivery Date',
//         validation: (Rule: any) => Rule.required().error('Estimated delivery date is required'),
//       },
//     ],
//   };
  










// sanity/schemas/order.js
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    },
    {
      name: 'total',
      title: 'Total Amount',
      type: 'number',
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Dispatch', value: 'dispatch' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
    },
  ],
};
