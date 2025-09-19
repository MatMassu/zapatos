import Amount from "@/components/amount";
import Image from "next/image";

export default function ProductView({
  name,
  description,
  price,
  onClose,
}: {
  name?: string;
  description?: string;
  price?: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="fixed m-20 rounded-xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>
        <div className="flex px-[5vw] py-[2vw] text-black">
          <div className="flex basis-1/2 border border-gray-300 rounded-xl justify-center">
            <Image src="/shoes_ph.png" alt="" height="500" width="700" />
          </div>

          <div className="flex flex-col items-center font-serif text-center mx-auto px-10">
            <div className="">
              <h1 className="mt-10 text-4xl">{name}</h1>
              <h2 className="mt-3 text-2xl">$ {price}</h2>
              <h3 className="mt-8 text-gray-500">{description}</h3>
            </div>

            <hr className="w-full mt-20 mb-20" />

            <div className="flex">
              <div className="flex flex-col mr-6 p-0.5">
                <div className="text-2xl">Talle</div>
                <a href="#" className="text-gray-400 underline text-sm mb-8">
                  (Guía de talles)
                </a>
              </div>

              <div className="grid grid-cols-10 gap-2">
                {[
                  "38",
                  "39",
                  "40",
                  "41",
                  "42",
                  "43",
                  "44",
                  "45",
                  "46",
                  "47",
                ].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className="flex aspect-square rounded-md items-center justify-center cursor-pointer pt-1 px-2 pb-2 text-xl hover:rounded-md hover:scale-110 hover:shadow-2xl active:bg-gray-300 transition"
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex mt-4 gap-3 w-full px-35">
              <Amount />
              <div className="flex-1 border border-gray-400 text-xl p-2 select-none cursor-pointer rounded-md min-w-0 active:bg-gray-300 transition-colors">
                <button
                  type="button"
                  aria-label="AddToCart"
                  className="cursor-pointer"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
