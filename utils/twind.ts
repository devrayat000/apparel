import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      colors: {
        red: {
          desaturated: "hsl(0, 36%, 70%)",
          soft: "hsl(0, 93%, 68%)",
          grayish: "hsl(0, 6%, 24%)",
        },
      },
      gradientColorStops: {
        "light-pink": "hsl(0, 100%, 98%)",
        pink: "hsl(0, 80%, 86%)",
        rose: "hsl(0, 74%, 74%)",
      },
      fontFamily: {
        sans: ["'Josefin Sans'", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/bg-pattern-desktop.svg')",
      },
    },
  },
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap')",
  },
};
if (IS_BROWSER) setup(config);
