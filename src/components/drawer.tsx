"use client";

import { useState } from "react";
import Button from "./button";
import SearchBar from "./searchbar";

export default function Drawer() {
  const [isOpen] = useState(true);

  return (
    <div className="absolute bg-white min-h-full w-80 p-4 text-black">
      <ul>
        <div className="grid grid-cols-2 items-center">
          <div className="relative left-11">
            <SearchBar />
          </div>
          <Button src={"menu.svg"} />
        </div>
      </ul>
    </div>
  );
}
