/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";

import Header from "../components/Header.tsx";
import Form from "../islands/Form.tsx";

export default function Home() {
  return (
    <section
      class={tw(
        "flex items-stretch h-screen bg-pink-50 md:bg-pattern bg-no-repeat bg-cover"
      )}
    >
      <main class={tw("flex flex-col items-stretch flex-1 md:(px-24 py-8)")}>
        <Header />
        <img
          src={asset("/assets/images/hero-mobile.jpg")}
          alt="Hero Mobile"
          class={tw("w-full md:hidden")}
        />

        <div class={tw("flex-1 p-12")}>
          <h3
            class={tw(
              "uppercase text-5xl font-semibold text-center md:(text-6xl text-left) tracking-widest"
            )}
          >
            <span class={tw("text-red-desaturated font-light")}>We're</span>{" "}
            coming soon
          </h3>

          <p
            class={tw(
              "mt-4 text-xs text-center md:(mt-6 text-start) leading-5 font-semibold text-red-desaturated"
            )}
          >
            We're coming soon Hello fellow shoppers! We're currently building
            our new fashion store. Add your email below to stay up-to-date with
            announcements and our launch deals
          </p>

          <Form />
        </div>
      </main>

      <img
        src={asset("/assets/images/hero-desktop.jpg")}
        alt="Hero Desktop"
        class={tw("hidden md:block")}
      />
    </section>
  );
}
