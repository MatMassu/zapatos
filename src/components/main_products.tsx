export default function MainProducts() {
  const cardClass =
    "flex min-w-[200px] min-h-[150px] aspect-[3/4] border-black border-1 rounded-2xl bg-neutral-400 hover:scale-101 hover:shadow-2xl transform transition-all";

  return (
    <div className="scroll-smooth  absolute aspect-auto shadow-2xl grid grid-cols-3 grid-rows-3 h-[70vw] w-[80vw] top-[20vw] left-1/2 rounded-2xl transform -translate-x-1/2 bg-gray-200 overflow-y-auto gap-y-165 gap-x-10 p-12 pb-130">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className={cardClass}></div>
      ))}
    </div>
  );
}
