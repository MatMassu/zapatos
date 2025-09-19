"use client";

import Link from "next/link";
import Button from "./button";
import SearchBar from "./searchbar";
import { useState } from "react";
import Cart from "./cart";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed grid grid-cols-3 h-[50px] w-full items-center bg-gradient-to-b from-[#884929cc] to-[#b16b47cc] px-4 z-40 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <Button src={"/menu.svg"} />
        <SearchBar />
      </div>

      <div className="text-center font-serif text-lg text-white cursor-pointer">
        <Link href="/">
          <p>MASSUCCO</p>
          <p className="text-xs">Calzado Artesanal</p>
        </Link>
      </div>

      <div className="flex justify-end items-center gap-3">
        <Link href="/account">
          <Button src={"/account.svg"} />
        </Link>
        <Button src={"/cart.svg"} onClick={() => setOpen(!isOpen)} />
        {isOpen && <Cart />}
      </div>
    </nav>
  );
}
