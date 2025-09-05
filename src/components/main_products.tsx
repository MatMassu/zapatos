import { fetchAllProducts } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

export default async function MainProducts() {
  const cardClass =
    "relative flex flex-col items-center justify-between aspect-[3/4] hover:scale-101 hover:shadow-2xl hover:rounded-md transform transition-all cursor-pointer pb-4 active:scale-99 select-none bg-radial from-white to-gray-200/60";

  const { productData } = await fetchAllProducts();

  return (
    <div className="flex-1 grid grid-cols-3 min-h-screen w-screen top-[20vw] bg-white">
      {productData.map((product) => (
        <Link
          key={product.id}
          href={`/productos/${product.id}`}
          className={cardClass}
        >
          <h1 className="text-black font-serif text-3xl pt-10">
            {product.name}
          </h1>
          <Image
            src="/shoes_ph.png"
            alt={product.name}
            height="500"
            width="500"
          />
          <div className="text-black font-serif flex flex-col items-center gap-5 pb-10">
            <p className="text-center pl-20 pr-20 text-gray-500">
              {product.description}
            </p>
            <p className="text-xl">${product.price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
