import { fetchProduct } from "@/app/lib/data";
import Amount from "@/components/amount";
import PaymentShippingOptions from "@/components/payment_shipping";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const singleProductData = await fetchProduct(params.slug);

  return (
    <div className="bg-white mt-[50px] ">
      <div className="flex px-[5vw] py-[2vw] text-black">
        <div className="flex basis-1/2 border border-gray-300 rounded-xl justify-center">
          <img src="/shoes_ph.png" className="scale-75" />
        </div>

        <div className="flex flex-col items-center font-serif text-center mx-auto">
          <div className="">
            <h1 className="mt-10 text-4xl">{singleProductData[0].name}</h1>
            <h2 className="mt-3 text-2xl">{singleProductData[0].price}</h2>
            <h3 className="mt-8 text-gray-500">
              {singleProductData[0].description}
            </h3>
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
              {["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"].map(
                (n) => (
                  <button
                    key={n}
                    type="button"
                    className="flex aspect-square rounded-md items-center justify-center cursor-pointer pt-1 px-2 pb-2 text-xl hover:rounded-md hover:scale-110 hover:shadow-2xl active:bg-gray-300 transition"
                  >
                    {n}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="flex mt-10 gap-3 w-full">
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
          <PaymentShippingOptions />
        </div>
      </div>
    </div>
  );
}
