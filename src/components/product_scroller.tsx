export default function ProductScroller() {
  const categorias = Array.from({ length: 4 }).map(
    (_, i) => `Categoria ${i + 1}`
  );

  return (
    <div className="overflow-hidden relative w-full h-40 bg-gray-100 pb-1 text-white">
      <div className="flex h-full">
        {/*animate-scroll*/}
        {[...categorias /*,...categorias*/].map((p, i) => (
          <div
            key={i}
            className="flex w-screen h-full active:scale-99 bg-white shadow-2xs m-0.5 items-center justify-center hover:scale-101 hover:shadow-md transform transition-all active:bg-gray-100 select-none"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
