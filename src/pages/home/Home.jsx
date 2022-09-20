import React from "react";
import Category from "./Category";
import Feature from "./Feature";
import HomeBanner from "./HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Feature></Feature>
      <Category></Category>
    </>
  );
}
