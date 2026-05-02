import Pot from "@/components/Pots/Pot";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pots",
};

export default function Pots() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-32 font-bold">Pots</h1>

        <Button>+ Add New Pot</Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Pot />
        <Pot />
        <Pot />
        <Pot />
        <Pot />
      </div>
    </>
  );
}
