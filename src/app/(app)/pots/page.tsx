import type { Metadata } from "next";
import { AddNewPot } from "@/components/Pots/AddNewPot";
import Pot from "@/components/Pots/Pot";

export const metadata: Metadata = {
  title: "Pots",
};

type PotType = {
  id: string;
  name: string;
  saved: number;
  target: number;
  color: string;
};

const pots: PotType[] = [
  {
    id: "1",
    name: "Savings",
    saved: 159,
    target: 2000,
    color: "var(--color-green)",
  },
  {
    id: "2",
    name: "Concert Ticket",
    saved: 150,
    target: 150,
    color: "var(--color-navy)",
  },
  {
    id: "3",
    name: "Christmas Gift",
    saved: 40,
    target: 60,
    color: "var(--color-cyan)",
  },
  {
    id: "4",
    name: "New Laptop",
    saved: 10,
    target: 1000,
    color: "var(--color-yellow)",
  },
  {
    id: "5",
    name: "Holiday to Japan",
    saved: 531,
    target: 1140,
    color: "var(--color-purple)",
  },
];

export default function Pots() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-primary text-32 font-bold">Pots</h1>
          <p className="text-muted-foreground xs:block hidden text-sm">
            Save towards goals, one pot at a time.
          </p>
        </div>

        <AddNewPot />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {pots.map((pot) => (
          <Pot key={pot.id} {...pot} />
        ))}
      </div>
    </>
  );
}
