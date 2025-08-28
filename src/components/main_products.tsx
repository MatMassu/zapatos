import Link from "next/link";

export default function MainProducts() {
  const cardClass =
    "relative flex flex-col items-center justify-between aspect-[3/4] hover:scale-101 hover:shadow-2xl hover:rounded-md transform transition-all cursor-pointer pb-4 active:scale-99 select-none bg-radial from-white to-gray-200/60";

  const products = Array.from({ length: 13 }).map((_, i) => ({
    name: `Producto ${i + 1}`,
    Id: `${i + 1}`,
    price: 100000,
    image: `/shoes_ph.png`,
  }));

  return (
    <div className="flex-1 grid grid-cols-3 min-h-screen w-screen top-[20vw] bg-white">
      {products.map((product) => (
        <Link
          key={product.Id}
          href={`/productos/${product.Id}`}
          className={cardClass}
        >
          <h1 className="text-black font-serif text-3xl pt-10">
            {product.name}
          </h1>
          <img src={product.image} alt={product.name} className="scale-75" />
          <div className="text-black font-serif flex flex-col items-center gap-5 pb-10">
            <p className="text-center pl-20 pr-20 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-xl">${product.price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
