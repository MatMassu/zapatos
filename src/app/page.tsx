

export default function Home() {
  return (
      <div className="flex h-12 relative min-w-screen justify-center items-center bg-white">
        <div className="text-black font-serif text-lg">Zapatos Massucco</div>
        <div className="grid grid-cols-2 items-center">
          <div className="absolute left-14">
            <input
              className="w- bg-transparent placeholder:text-slate-400 font-serif text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Buscar..." 
            />
          </div>
          <button className="absolute left-3 font-serif text-slate-700 text-sm border border-slate-200 rounded-md pl-2 pr-2 py-2 transition duration-100 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow active:scale-95">
            <img 
              src="menu.svg" alt="menu" height="20" width="20"/>
          </button>
        </div>
        <div className="grid grid-cols-2 items-center">
          <button className="absolute right-3 font-serif text-slate-700 text-sm border border-slate-200 rounded-md pl-2 pr-2 py-2 transition duration-100 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow active:scale-95">
            <img 
              src="cart.svg" alt="menu" height="20" width="20"/>
          </button>
          <button className="absolute right-14 font-serif text-slate-700 text-sm border border-slate-200 rounded-md pl-2 pr-2 py-2 transition duration-100 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow active:scale-95">
            <img 
              src="account.svg" alt="menu" height="20" width="20"/>
          </button>
        </div>
      </div>
  );
}




{/*
  <button type="button" className="px-1 py-2 border-white-100 rounded-md text-lg font-semibold font-sans text-black bg-amber-600 hover:bg-amber-700 hover:text-white active:bg-amber-800
  active:scale-95">
    Continuar
  </button>
*/}