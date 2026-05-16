"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { label: "Entertainment", value: "entertainment" },
  { label: "Bills", value: "bills" },
  { label: "Groceries", value: "groceries" },
  { label: "Dining Out", value: "dining-out" },
  { label: "Transportation", value: "transportation" },
  { label: "Personal Care", value: "personal-care" },
  { label: "Education", value: "education" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Shopping", value: "shopping" },
  { label: "General", value: "general" },
];

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

export function AddNewBudget() {
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
      <form>
        <DialogTrigger asChild>
          <Button>+ Add New Budget</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Budget</DialogTitle>
            <DialogDescription>
              Choose a category to set a spending budget. These categories can
              help you monitor spending.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-4">
            <Field className="gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="budget"
              >
                Budget Category
              </Label>
              <Select>
                <SelectTrigger className="border-accent w-full border px-5 py-5.5">
                  <SelectValue placeholder="Select a category" />
                  <Image
                    className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180 md:hidden"
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
                    {CATEGORIES.map((category, index) => (
                      <div key={category.value}>
                        <SelectItem value={category.value}>
                          {category.label}
                        </SelectItem>

                        {index !== CATEGORIES.length - 1 && (
                          <FieldSeparator className="-my-2" />
                        )}
                      </div>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="max-spending"
              >
                Maximum Spending
              </Label>

              <div className="relative w-full">
                <Input
                  value={value}
                  onChange={handleChange}
                  id="max-spending"
                  name="max-spending"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 2000"
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
                    className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180 md:hidden"
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
              Add Budget
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
