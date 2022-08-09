/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { z, ZodError } from "zod";
import { asset, IS_BROWSER } from "$fresh/runtime.ts";

const emailSchema = z
  .string()
  .email({ message: "Please provide a valid email" });

const Form = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: h.JSX.GenericEventHandler<HTMLFormElement> = (e) => {
    console.log("submitting");

    e.preventDefault();
    const el = e.currentTarget;
    try {
      const formData = new FormData(el);
      const email = formData.get("email");
      emailSchema.parse(email);
    } catch (err) {
      if (err instanceof ZodError) {
        console.log("erroring");
        setError(err.flatten().formErrors[0]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset
        name="subscribe"
        class={tw(
          "relative border border-red-desaturated rounded-full flex items-stretch mt-6 md:mt-8",
          { "!border-red-600": !!error }
        )}
        disabled={!IS_BROWSER}
      >
        <section class={tw("relative flex-1")}>
          <input
            type="text"
            name="email"
            id="email"
            class={tw(
              "w-full px-7 py-4 bg-transparent focus-within:outline-none placeholder:text-red-desaturated"
            )}
            placeholder="Email Address"
          />
          {!!error && (
            <img
              src={asset("/assets/images/icon-error.svg")}
              alt="Error Icon"
              class={tw("absolute top-1/2 right-4 -translate-y-1/2")}
            />
          )}
        </section>
        {!!error && (
          <p
            class={tw(
              "absolute -bottom-2 translate-y-full mt-2 ml-5 text-pink-600 text-sm"
            )}
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          class={tw(
            "px-7 md:px-10 py-4 rounded-full bg-gradient-to-br from-pink to-rose hover:(from-light-pink to-pink) transition shadow-lg shadow-pink-300"
          )}
        >
          <img src={asset("/assets/images/icon-arrow.svg")} alt="Arrow" />
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
