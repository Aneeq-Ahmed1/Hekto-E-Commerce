// import { createClient } from "next-sanity";
// import { Product } from "../../sanity/lib/types"

// const client = createClient({
    
//     projectId :"whkip3lc",
//     dataset : "production",
//     useCdn : true,
//     apiVersion : "2023-10-10"

// })

// export async function sanityFetch({query, params = {}}: {query :string, params? : any}){
//     return await client.fetch(query, params)
    
// }




import { createClient } from "next-sanity";
import { Product } from "../../sanity/lib/types"; // Assuming you have defined Product type

const client = createClient({
  projectId: "whkip3lc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
});

export async function sanityFetch({ query, params = {} }: { query: string; params?: any }) {
  const data = await client.fetch(query, params); // Fetch the data
  return data as Product[]; // Return the data cast as Product[]
}
