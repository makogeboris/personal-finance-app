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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemColor,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const COLORS = [
  { name: "Green", value: "green", class: "bg-green" },
  { name: "Yellow", value: "yellow", class: "bg-yellow" },
  { name: "Cyan", value: "cyan", class: "bg-cyan" },
  { name: "Navy", value: "navy", class: "bg-navy" },
  { name: "Red", value: "red", class: "bg-red" },
  { name: "Purple", value: "purple", class: "bg-purple" },
  { name: "Purple Light", value: "purple-light", class: "bg-purple-light" },
  { name: "Turquoise", value: "turquoise", class: "bg-turquoise" },
  { name: "Brown", value: "brown", class: "bg-brown" },
  { name: "Magenta", value: "magenta", class: "bg-magenta" },
  { name: "Blue", value: "blue", class: "bg-blue" },
  { name: "Navy Grey", value: "navy-grey", class: "bg-navy-grey" },
  { name: "Army Green", value: "army-green", class: "bg-army-green" },
  { name: "Gold", value: "gold", class: "bg-gold" },
  { name: "Orange", value: "orange", class: "bg-orange" },
];

const usedColors = new Set(["green", "blue"]);

type EditPotProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EditPot({ open, onOpenChange }: EditPotProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Edit Pot</DialogTitle>
            <DialogDescription>
              If your saving targets change, feel free to update your pots.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-4">
            <Field className="gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="pot-name"
              >
                Pot Name
              </Label>

              <Input
                id="pot-name"
                name="pot-name"
                type="text"
                placeholder="Concert Ticket"
                className="pl-6"
              />
              <FieldDescription className="text-end text-xs">
                16 characters left
              </FieldDescription>
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="max-spending"
              >
                Target
              </Label>

              <div className="relative w-full">
                <Input
                  value={value}
                  onChange={handleChange}
                  id="target"
                  name="target"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 110"
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

            <Field className="gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="theme"
              >
                Theme
              </Label>
              <Select>
                <SelectTrigger className="border-accent w-full border px-5 py-5.5">
                  <SelectValue placeholder="Select a color" />
                  <Image
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180 md:hidden"
                    width={12}
                    height={12}
                    alt=""
                    src="/icons/icon-caret-down.svg"
                  />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={8}
                >
                  <SelectGroup className="p-2">
                    {COLORS.map((color) => (
                      <SelectItemColor
                        key={color.value}
                        value={color.value}
                        isUsed={usedColors.has(color.value)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`${color.class} size-4 rounded-full`}
                          />
                          <span>{color.name}</span>
                        </div>
                      </SelectItemColor>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          <DialogFooter className="w-full">
            <Button className="w-full" type="submit">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
