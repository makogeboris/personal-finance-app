import "./styles/globals.css";
import { publicSans } from "./styles/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Personal Finance",
    default: "Personal Finance",
  },
  description:
    "Take control of your money. Track transactions, manage budgets, monitor savings pots, and stay on top of recurring bills — all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${publicSans.variable} antialiased`}
    >
      <body className="bg-secondary">{children}</body>
    </html>
  );
}
