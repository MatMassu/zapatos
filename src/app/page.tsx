import React from "react";
import MainProducts from "@/components/main_products";
import ProductScroller from "@/components/product_scroller";
import Footer from "@/components/footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-[100vw] mt-[50px]">
      <ProductScroller />
      <MainProducts />
    </div>
  );
}
