import Image from "next/image";

export default function Cart() {
  return (
    <div className="fixed flex row size-full mt-[100px] font-serif">
      <div className="w-full h-screen bg-[#00000086] backdrop-blur-md z-10"></div>
      <div className="flex flex-col min-h-screen bg-white basis-1/4 pt-3 text-black">
        <h1 className="text-center text-xl">CARRITO</h1>
        <hr className="w-full mt-3 mb-5 border-gray-300" />
        <section>
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <Image
              src="/shoes_ph.png"
              alt=""
              height="100"
              width="150"
              className="ml-3 row-span-2"
            />
            <div>Nombre de producto</div>
            <div>Precio</div>
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
              <button type="button">O</button>
              <p className="col-span-10">Retiro en local</p>
              <button>O</button>
              <p className="col-span-10">Envío a domicilio</p>
              <div className="row-span-6 border-gray-300" />
              <div className="row-span-6" />
              <p className="col-span-4">Código postal:</p>
              <input className="col-span-5 border-gray-300 border-1 rounded-md"></input>
              <p className="col-span-9"> Servicio: </p>
              <button className="col-start-4">O</button>
              <p className="col-span-5">OCA</p>
              <p>Gratis</p>
              <button className="col-start-4">O</button>
              <p className="col-span-5">Correo Argentino</p>
              <p>$1.255,00</p>
              <button className="col-start-4">O</button>
              <p className="col-span-5">Andreani</p>
              <p>$3.176,00</p>
            </div>
          </section>
        </section>
        <hr className="w-full mb-4 border-gray-300" />
        <section className="flex justify-between mx-4 text-xl">
          <div>TOTAL:</div>
          <div>$100.000,00</div>
        </section>
        <hr className="w-full mt-4 mb-5 border-gray-300" />
      </div>
    </div>
  );
}
