import localFont from "next/font/local";

export const publicSans = localFont({
  src: [
    {
      path: "../../../public/fonts/PublicSans-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/PublicSans-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-public-sans",
});
