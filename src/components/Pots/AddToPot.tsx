"use client";

import Image from "next/image";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ProgressPot } from "../ui/progress";
import { addToPotAction } from "@/actions/pots";
import type { Pot } from "@/types";

export function AddToPot({ pot }: { pot: Pot }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parsedAmount = parseFloat(amount) || 0;
  const currentPct = (pot.saved / pot.target) * 100;
  const addPct = Math.min((parsedAmount / pot.target) * 100, 100 - currentPct);
  const newSaved = Math.min(pot.saved + parsedAmount, pot.target);
  const newPct = (newSaved / pot.target) * 100;

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    let raw = e.target.value.replace(/[^0-9.]/g, "");
    const parts = raw.split(".");
    if (parts.length > 2) raw = parts[0] + "." + parts.slice(1).join("");
    setAmount(raw);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!parsedAmount || parsedAmount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }
    setLoading(true);
    setError(null);
    const result = await addToPotAction(pot.id, parsedAmount);
    setLoading(false);
    if (result?.error) {
      setError(result.error);
    } else {
      setOpen(false);
      setAmount("");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setAmount("");
      }}
    >
      <DialogTrigger asChild>
        <button className="bg-secondary text-primary hover:bg-background hover:border-accent focus-visible:outline-foreground w-full cursor-pointer rounded-md border border-transparent p-4 text-sm font-bold transition-all focus-visible:outline-2">
          + Add Money
        </button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Add to &apos;{pot.name}&apos;</DialogTitle>
            <DialogDescription>
              Enter the amount you want to add to this pot. This will increase
              your total saved progress toward the target.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
              {error}
            </p>
          )}

          <FieldGroup className="mt-2.5 gap-8">
            <Field className="w-full">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm">New Amount</p>
                <span className="text-32 text-primary font-bold">
                  ${newSaved.toFixed(2)}
                </span>
              </div>

              <ProgressPot
                className="w-full transition-all duration-500"
                variant="add"
                value={currentPct}
                secondaryValue={addPct}
              />

              <div className="flex items-center justify-between">
                <span className="text-chart-1 text-xs font-bold">
                  {newPct.toFixed(2)}%
                </span>
                <span className="text-muted-foreground text-xs">
                  Target of ${pot.target.toLocaleString()}
                </span>
              </div>
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="add-amount"
              >
                Amount to Add
              </Label>
              <div className="relative w-full">
                <Input
                  id="add-amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 400"
                  value={amount}
                  onChange={handleAmountChange}
                  className="pl-10.5"
                />
                <Image
                  className="pointer-events-none absolute top-1/2 left-5 size-4 -translate-y-1/2"
                  width={16}
                  height={16}
                  alt=""
                  src="/icons/icon-dollar.svg"
                />
              </div>
            </Field>
          </FieldGroup>

          <DialogFooter className="w-full">
            <Button className="w-full" type="submit" disabled={loading}>
              <span className="flex items-center gap-2">
                {loading && <LoaderCircle className="size-4 animate-spin" />}
                <span>{loading ? "Adding" : "Confirm Addition"}</span>
              </span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
