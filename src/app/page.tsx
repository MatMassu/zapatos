import React from "react";
import MainProducts from "@/components/main_products";
import ProductScroller from "@/components/product_scroller";

export default function Home() {
  return (
    <section className="relative">
      <ProductScroller />
      <MainProducts />
    </section>
  );
}
