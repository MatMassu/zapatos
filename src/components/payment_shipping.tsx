"use client";

import { useState } from "react";

export default function PaymentShippingOptions() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  return (
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
  );
}
