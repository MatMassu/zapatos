import Button from "./button";
import SearchBar from "./searchbar";

export default function NavBar() {
  return (
    <nav className="fixed grid grid-cols-3 h-12 w-full items-center bg-white px-4 z-50">
      {/* Left section: menu + search */}
      <div className="flex items-center gap-3">
        <Button src={"menu.svg"} />
        <SearchBar />
      </div>

      {/* Center section: brand */}
      <div className="text-center text-black font-serif text-lg">
        Zapatos Massucco
      </div>

      {/* Right section: account + cart */}
      <div className="flex justify-end items-center gap-3">
        <Button src={"account.svg"} />
        <Button src={"cart.svg"} />
      </div>
    </nav>
  );
}
