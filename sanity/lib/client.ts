import { createClient, SanityDocumentStub } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})




export async function createOrder(orderData: SanityDocumentStub<Record<string, any>>) {
  try {
    const newOrder = await client.create(orderData);
    return newOrder;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order");
  }
}