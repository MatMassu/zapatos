export default function MainProducts() {
  const cardClass =
    "relative flex flex-col items-center justify-between aspect-[3/4] hover:scale-101 hover:shadow-2xl transform transition-all pb-4 active:scale-99 select-none bg-radial from-white to-gray-200/60";

  return (
    <div className="flex-1 grid grid-cols-3 min-h-screen w-screen top-[20vw] bg-white ">
      {Array.from({ length: 13 }).map((_, i) => (
        <div key={i} className={cardClass}>
          <h1 className="text-black font-serif text-3xl pt-10">
            Producto {i + 1}
          </h1>
          <img src={"shoes_ph.png"} className="scale-70"></img>
          <div className="text-black font-serif flex flex-col items-center gap-5 pb-10">
            <p className="text-center pl-20 pr-20 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-xl">$100.000</p>
          </div>
        </div>
      ))}
    </div>
  );
}
