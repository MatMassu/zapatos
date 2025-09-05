"use client";

import { useState } from "react";

export default function Amount() {
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="flex justify-between border rounded-md border-gray-400 basis-3/12 p-1.5">
      <button
        type="button"
        aria-label="Decrease"
        className="aspect-square active:bg-gray-300 active:rounded-sm transition cursor-pointer"
        onClick={decreaseAmount}
      >
        -
      </button>

      <div className="px-2">
        <p className="size-full text-center text-xl text-gray-500 select-none">
          {amount}
        </p>
      </div>

      <button
        type="button"
        id="amount"
        aria-label="Increase"
        className="aspect-square active:bg-gray-300 active:rounded-sm transition cursor-pointer"
        onClick={increaseAmount}
      >
        +
      </button>
    </div>
  );
}
