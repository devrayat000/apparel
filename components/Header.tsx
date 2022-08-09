/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";

const Header = () => {
  return (
    <header class={tw("p-8 bg-white md:bg-transparent")}>
      <img
        src={asset("/assets/images/logo.svg")}
        alt="Brand Logo"
        class={tw("w-1/3 md:w-auto")}
      />
    </header>
  );
};

export default Header;
