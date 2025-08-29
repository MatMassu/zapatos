"use client";

import { useState } from "react";

/*export default async function ProductPage({
  params,
}: {
  params: Promise<{ Id: number }>;
}) { */

export default function ProductPage() {
  /*  const productId = (await params).Id; */

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  /* TODO: con productId recuperar datos de DB para mostrar info de compra */
  return (
    <div className="bg-white mt-[50px] ">
      <div className="flex px-[5vw] py-[2vw] text-black">
        <div className="flex basis-1/2 border border-gray-300 rounded-xl justify-center">
          <img src="/shoes_ph.png" className="scale-75" />
        </div>

        <div className="flex flex-col items-center font-serif text-center mx-auto">
          <h1 className="mt-10 text-4xl">Nombre de producto</h1>
          <h2 className="mt-3 text-2xl">$100.000</h2>

          <hr className="w-full mt-25 mb-25" />

          <div className="flex">
            <div className="flex flex-col mr-6 p-0.5">
              <div className="text-2xl">Talle</div>
              <a href="#" className="text-gray-400 underline text-sm">
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
            <div className="flex justify-between border rounded-md border-gray-400 basis-3/12 p-1.5">
              <button
                type="button"
                aria-label="Decrease"
                className="aspect-square active:bg-gray-300 active:rounded-sm transition cursor-pointer"
                onClick={decreaseAmount}
              >
                -
              </button>

              <div className="px-2">
                <p className="size-full text-center text-xl text-gray-500 select-none">
                  {amount}
                </p>
              </div>

              <button
                type="button"
                id="amount"
                aria-label="Increase"
                className="aspect-square active:bg-gray-300 active:rounded-sm transition cursor-pointer"
                onClick={increaseAmount}
              >
                +
              </button>
            </div>

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

          <div className="flex flex-col w-full items-start text-gray-500 mt-10">
            <div
              className="underline cursor-pointer select-none active:text-gray-400"
              onClick={() => setIsPaymentOpen(!isPaymentOpen)}
              aria-expanded={isPaymentOpen}
            >
              Medios de pago
            </div>

            {isPaymentOpen && (
              <div className="border transition-all transform rounded-md p-2 text-left w-full">
                <p>Tarjeta de crédito</p>
                <p>Transferencia o deposito</p>
                <p>MercadoPago</p>
              </div>
            )}

            <div
              className="underline cursor-pointer select-none mt-5 active:text-gray-400"
              onClick={() => setIsShippingOpen(!isShippingOpen)}
              aria-expanded={isShippingOpen}
            >
              Medios de envío
            </div>
            {isShippingOpen && (
              <div className="border transition-all transform rounded-md p-2 text-left w-full">
                <p>Andreani</p>
                <p>OCA</p>
                <p>Correo Argentino</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
