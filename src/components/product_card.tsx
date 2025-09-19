"use client";
import Image from "next/image";
import { useState } from "react";
import ProductView from "./product_view";
import { createPortal } from "react-dom";

export default function ProductCard({
  id = 404,
  name = "Not Found",
  description = "N/A",
  price = 0,
}) {
  const cardClass =
    "flex flex-col items-center hover:scale-101 hover:shadow-2xl hover:rounded-md transform transition-all cursor-pointer pb-4 active:scale-99 select-none bg-radial from-white to-gray-200/60";
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={cardClass} onClick={() => setOpen(true)}>
      <h1 className="text-black font-serif text-2xl pt-10">{name}</h1>
      <Image src="/shoes_ph.png" alt={name} height="400" width="400" />
      <div className="text-black font-serif flex flex-col items-center gap-5 pb-10">
        <p className="text-center pl-20 pr-20 text-gray-500">{description}</p>
        <p className="text-xl">${price.toLocaleString()}</p>
      </div>
      {isOpen &&
        createPortal(
          <ProductView
            name={name}
            description={description}
            price={price}
            onClose={() => setOpen(false)}
          />,
          document.body
        )}
    </div>
  );
}
