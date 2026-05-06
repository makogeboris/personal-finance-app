"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
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

export function AddToPot() {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let raw = e.target.value;

    raw = raw.replace(/[^0-9.]/g, "");

    const parts = raw.split(".");
    if (parts.length > 2) {
      raw = parts[0] + "." + parts.slice(1).join("");
    }

    setValue(raw);
  }

  return (
    <Dialog>
      <form className="flex w-full flex-col gap-5">
        <DialogTrigger asChild>
          <button className="bg-secondary text-primary hover:bg-background hover:border-accent focus-visible:outline-foreground w-full cursor-pointer rounded-md border border-transparent p-4 text-sm font-bold transition-all focus-visible:outline-2">
            + Add Money
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to ‘Savings’</DialogTitle>
            <DialogDescription>
              Enter the amount you want to add to this pot. This will increase
              your total saved progress toward the target.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-5">
            <Field className="w-full">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm">New Amount</p>
                <span className="text-32 text-primary font-bold">$559.00</span>
              </div>

              <ProgressPot className="w-full transition-all duration-500" />

              <div className="flex items-center justify-between">
                <span className="text-chart-1 text-xs font-bold">27.95%</span>
                <span className="text-muted-foreground text-xs">
                  Target of $2,000
                </span>
              </div>
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="amount"
              >
                Amount to Add
              </Label>

              <div className="relative w-full">
                <Input
                  value={value}
                  onChange={handleChange}
                  id="amount"
                  name="amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 400"
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
            <Button className="w-full" type="submit">
              Confirm Addition
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
