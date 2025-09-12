export default function SearchBar() {
  return (
    <input
      className="w-60 bg-white opacity-80 placeholder:text-gray-500 text-black font-serif text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="Buscar..."
    />
  );
}
