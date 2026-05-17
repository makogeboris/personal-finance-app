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
  SelectItemColor,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CATEGORIES, COLORS } from "@/lib/constants/categories";
import { addBudgetAction } from "@/actions/budgets";
import { LoaderCircle } from "lucide-react";

export function AddNewBudget({
  usedCategories = [],
  usedColors = [],
}: {
  usedCategories?: string[];
  usedColors?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [theme, setTheme] = useState("");
  const [maximum, setMaximum] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    let raw = e.target.value.replace(/[^0-9.]/g, "");
    const parts = raw.split(".");
    if (parts.length > 2) raw = parts[0] + "." + parts.slice(1).join("");
    setMaximum(raw);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!category || !maximum || !theme) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError(null);
    const result = await addBudgetAction({
      category,
      maximum: parseFloat(maximum),
      theme,
    });
    setLoading(false);
    if (result?.error) {
      setError(result.error);
    } else {
      setOpen(false);
      setCategory("");
      setTheme("");
      setMaximum("");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>+ Add New Budget</Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Add New Budget</DialogTitle>
            <DialogDescription>
              Choose a category to set a spending budget. These categories can
              help you monitor spending.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
              {error}
            </p>
          )}

          <FieldGroup className="gap-4">
            <Field className="gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="budget"
              >
                Budget Category
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="border-accent w-full border px-5 py-5.5">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={8}
                >
                  <SelectGroup className="p-2">
                    {CATEGORIES.map((cat, index) => (
                      <div key={cat.value}>
                        <SelectItemColor
                          value={cat.value}
                          disabled={usedCategories.includes(cat.value)}
                          isUsed={usedCategories.includes(cat.value)}
                        >
                          {cat.label}
                        </SelectItemColor>
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
                  value={maximum}
                  onChange={handleAmountChange}
                  id="max-spending"
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
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="border-accent w-full border px-5 py-5.5">
                  <SelectValue placeholder="Select a color" />
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
                        isUsed={usedColors.includes(color.value)}
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
            <Button className="w-full" type="submit" disabled={loading}>
              <span className="flex items-center gap-2">
                {loading && <LoaderCircle className="size-4 animate-spin" />}
                <span>{loading ? "Adding" : "Add Budget"}</span>
              </span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
