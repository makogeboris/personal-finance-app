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
import { withdrawFromPotAction } from "@/actions/pots";
import type { Pot } from "@/types";

export function WithdrawPot({ pot }: { pot: Pot }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parsedAmount = parseFloat(amount) || 0;
  const currentPct = (pot.saved / pot.target) * 100;
  const withdrawPct = Math.min((parsedAmount / pot.target) * 100, currentPct);
  const remainingPct = currentPct - withdrawPct;
  const newSaved = Math.max(pot.saved - parsedAmount, 0);

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
    if (parsedAmount > pot.saved) {
      setError(`Cannot withdraw more than $${pot.saved.toFixed(2)}.`);
      return;
    }
    setLoading(true);
    setError(null);
    const result = await withdrawFromPotAction(pot.id, parsedAmount);
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
          Withdraw
        </button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Withdraw from &apos;{pot.name}&apos;</DialogTitle>
            <DialogDescription>
              Enter the amount you want to withdraw from this pot. This will
              reduce your total saved progress toward the target.
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
                variant="withdraw"
                value={remainingPct}
                secondaryValue={withdrawPct}
              />

              <div className="flex items-center justify-between">
                <span className="text-destructive text-xs font-bold">
                  {remainingPct.toFixed(2)}%
                </span>
                <span className="text-muted-foreground text-xs">
                  Target of ${pot.target.toLocaleString()}
                </span>
              </div>
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="withdraw-amount"
              >
                Amount to Withdraw
              </Label>
              <div className="relative w-full">
                <Input
                  id="withdraw-amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 20"
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
                <span>{loading ? "Withdrawing" : "Confirm Withdrawal"}</span>
              </span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
