import Image from "next/image";

export default function Cart() {
  return (
    <div className="fixed flex row size-full mt-[100px] font-serif">
      <div className="w-full h-screen bg-[#00000086] backdrop-blur-md z-10"></div>
      <div className="flex flex-col min-h-screen bg-white basis-1/4 pt-3 text-black">
        <h1 className="text-center text-xl">CARRITO</h1>
        <hr className="w-full mt-3 border-gray-300" />
        <section className="ml-3 flex justify-left gap-3">
          <Image src="/shoes_ph.png" alt="" height="130" width="130" />
          <div className="flex flex-col justify-center text-xl">
            <p className="ml-0.5">Nombre de producto</p>
            <p>$100.000,00</p>
          </div>
        </section>
        <hr className="w-full mt-4" />
        <section className="bg-gray-100 w-full h-80">
          <section className="flex justify-between mt-4 mx-4">
            <div>Subtotal:</div>
            <div>$100.000,00</div>
          </section>
          <hr className="w-full border-gray-300 my-4" />
          <section className="mx-4">
            <div className="">Envío:</div>
            <div className="grid grid-cols-11 grid-rows-8">
              <input
                type="radio"
                id="local"
                name="shipping"
                className="scale-60"
              ></input>
              <label htmlFor="local" className="col-span-10">
                Retiro en local
              </label>
              <input
                type="radio"
                id="shipping"
                name="shipping"
                className="scale-60"
              ></input>
              <label htmlFor="shipping" className="col-span-10">
                Envío a domicilio
              </label>
              <div className="row-span-6 border-gray-300" />
              <div className="row-span-6" />
              <p className="col-span-4">Código postal:</p>
              <input className="col-span-5 border-gray-300 border-1 rounded-md"></input>
              <p className="col-span-9"> Servicio: </p>
              <input
                type="radio"
                id="oca"
                name="service"
                className="col-start-4 scale-60"
              ></input>
              <label htmlFor="oca" className="col-span-5">
                OCA
              </label>
              <p>Gratis</p>
              <input
                type="radio"
                id="arg"
                name="service"
                className="col-start-4 scale-60"
              ></input>
              <label htmlFor="arg" className="col-span-5">
                Correo Argentino
              </label>
              <p>$1.255,00</p>
              <input
                type="radio"
                id="and"
                name="service"
                className="col-start-4 scale-60"
              ></input>
              <label htmlFor="and" className="col-span-5">
                Andreani
              </label>
              <p>$3.176,00</p>
            </div>
          </section>
        </section>
        <hr className="w-full mb-4 border-gray-300" />
        <section className="flex justify-between mx-4 text-xl">
          <div>Total:</div>
          <div>$100.000,00</div>
        </section>
        <hr className="w-full mt-4 mb-5 border-gray-300" />
        <div className="flex justify-center w-full">
          <button className="w-3/4 bg-black text-white p-3 cursor-pointer rounded-md transition-all active:scale-98 active:scale-y-95">
            INICIAR COMPRA
          </button>
        </div>
      </div>
    </div>
  );
}
