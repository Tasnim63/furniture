import React from "react";
import Category from "./Category";
import Feature from "./Feature";
import HomeBanner from "./HomeBanner";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Feature></Feature>
      <Category></Category>
      <ProductCard></ProductCard>
    </>
  );
}
