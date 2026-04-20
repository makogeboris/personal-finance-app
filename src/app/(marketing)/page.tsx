import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Stats from "@/components/marketing/Stats";
import Features from "@/components/marketing/Features";
import Steps from "@/components/marketing/Steps";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Steps />
      </main>
      <Footer />
    </>
  );
}
