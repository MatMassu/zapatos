import { fetchAllProducts } from "@/app/lib/data";
import ProductCard from "./product_card";

export default async function MainProducts() {
  const { productData } = await fetchAllProducts();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
