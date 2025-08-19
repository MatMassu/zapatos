import Button from "./button";
import SearchBar from "./searchbar";

export default function NavBar() {
  return (
    <nav className="fixed grid grid-cols-3 h-[50px] w-full items-center bg-radial from-[#925232] to-[#864d30] px-4 z-50">
      {/* Left section: menu + search */}
      <div className="flex items-center gap-3">
        <Button src={"menu.svg"} />
        <SearchBar />
      </div>

      {/* Center section: brand */}
      <div className="text-center font-serif text-lg text-white cursor-pointer">
        <a href="/">Zapatos Massucco</a>
      </div>

      {/* Right section: account + cart */}
      <div className="flex justify-end items-center gap-3">
        <a href="/account">
          <Button src={"account.svg"} />
        </a>
        <a href="/cart">
          <Button src={"cart.svg"} />
        </a>
      </div>
    </nav>
  );
}
