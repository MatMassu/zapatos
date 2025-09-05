import postgres from "postgres";
import { Products } from "./definitions";
import { cache } from "react";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export const fetchProduct = cache(async (id: string) => {
  try {
    const data = await sql<Products[]>`SELECT * FROM product WHERE id = ${id}`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch product data with id ${id}.`);
  }
});

export const fetchAllProducts = cache(async () => {
  try {
    const data = await sql<Products[]>`SELECT * FROM product`;

    /* In case we need the number of products in database
    
    const result = await sql<{ count: string }[]>`SELECT COUNT(*) FROM product`;
    const count = Number(result[0].count);
    */

    return {
      productData: data,
      /*productAmount: count,*/
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
});
