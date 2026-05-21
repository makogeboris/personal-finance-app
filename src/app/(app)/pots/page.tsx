import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getPots } from "@/lib/data/getPots";
import Pot from "@/components/Pots/Pot";
import { AddNewPot } from "@/components/Pots/AddNewPot";
import PotSkeleton from "@/components/Skeletons/PotSkeleton";
import { COLOR_MAP_REVERSE } from "@/lib/constants/categories";

export const metadata: Metadata = { title: "Pots" };

export default function PotsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-primary text-32 font-bold">Pots</h1>
          <p className="text-muted-foreground xs:block hidden text-sm">
            Save towards goals, one pot at a time.
          </p>
        </div>
        <Suspense fallback={null}>
          <AddNewPotServer />
        </Suspense>
      </div>

      <Suspense fallback={<PotSkeleton />}>
        <PotsData />
      </Suspense>
    </>
  );
}

async function AddNewPotServer() {
  const pots = await getPots();
  const usedColors = pots
    .map((p) => COLOR_MAP_REVERSE[p.theme] ?? "")
    .filter(Boolean);
  return <AddNewPot usedColors={usedColors} />;
}

async function PotsData() {
  const pots = await getPots();

  if (pots.length === 0) {
    return (
      <div className="bg-background rounded-12 mt-8 flex flex-col items-center gap-4 p-4 py-14 text-center">
        <div className="bg-sidebar-accent grid size-14 place-items-center rounded-full">
          <Image width={24} height={24} src="/icons/icon-nav-pots.svg" alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-primary text-base font-bold">No pots yet</h3>
          <p className="text-muted-foreground text-sm">
            Create a pot to start saving for specific goals like travel,
            gadgets, or emergencies.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {pots.map((pot) => (
        <Pot key={pot.id} pot={pot} />
      ))}
    </div>
  );
}
